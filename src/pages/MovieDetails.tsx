import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { movieApi } from "../api/movieApi";
import type { Movie } from "../types/movie";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    if (id) movieApi.getById(Number(id)).then(setMovie);
  }, [id]);

  if (!movie) return <p>Loading...</p>;

  return (
    <div className="max-w-2xl mx-auto mt-8 bg-white shadow-lg p-6 rounded-lg">
      <img
        src={movie.posterUrl || "/placeholder.jpg"}
        alt={movie.title}
        className="w-full h-80 object-cover mb-4"
      />
      <h1 className="text-3xl font-bold">{movie.title}</h1>
      <p className="text-gray-600">Directed by: {movie.director}</p>
      <p className="mt-4">{movie.description}</p>
    </div>
  );
};

export default MovieDetails;
