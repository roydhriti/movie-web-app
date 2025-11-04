import { useEffect, useState } from "react";
import { movieApi } from "../api/movieApi";
import type { Movie } from "../types/movie";
import MovieTable from "../components/movie/MovieTable";
import MovieForm from "../components/form/MovieForm";

const MoviePage = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  const loadMovies = async () => {
    try {
      const data = await movieApi.getAll();
      setMovies(data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadMovies();
  }, []);

  const handleCreateOrUpdate = async (movieData: Movie | Omit<Movie, "id">) => {
  try {
    if ('id' in movieData && movieData.id) {
      // Update existing movie
      const updated = await movieApi.update(movieData.id, movieData as Movie);
      setMovies((prev) => prev.map((m) => (m.id === updated.id ? updated : m)));
    } else {
      // Create new movie
      const created = await movieApi.create(movieData as Omit<Movie, "id">);
      setMovies((prev) => [...prev, created]);
    }

    setShowForm(false);
    setSelectedMovie(null);
  } catch (error) {
    console.error(error);
  }
};

  const handleEdit = (movie: Movie) => {
    setSelectedMovie(movie);
    setShowForm(true);
  };

  const handleDelete = async (id: number) => {
    console.log("Delete movie:", id);
    try {
      // await movieApi.delete(id); // call API
      setMovies(movies.filter((m) => m.id !== id)); // remove from list
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="flex">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        🎬 Movies & TV Shows
      </h1>

      <div>
        <button
          onClick={() => {
            setShowForm(!showForm);
            setSelectedMovie(null);
          }}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          {showForm ? "Cancel" : "➕ Add Movie"}
        </button>
      </div>
      </div>

      {showForm && (
        <div className="mb-8">
          <MovieForm
            model={selectedMovie ?? undefined}
            onSubmit={handleCreateOrUpdate}
          />
        </div>
      )}

      <MovieTable
        movies={movies}
        isLoading={isLoading}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

    </div>
  );
};

export default MoviePage;
