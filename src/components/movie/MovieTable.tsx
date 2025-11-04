import type { FC } from "react";
import type { Movie } from "../../types/movie";

interface MovieTableProps {
  movies: Movie[];
  isLoading: boolean;
  onEdit: (movie: Movie) => void;
  onDelete: (id: number) => void;
}

const MovieTable: FC<MovieTableProps> = ({
  movies,
  isLoading,
  onEdit,
  onDelete,
}) => {
  return (
    <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
      <table className="min-w-full border border-gray-300 text-sm">
        <thead className="bg-gray-200 text-gray-700">
          <tr>
            <th className="px-4 py-2 border">#</th>
            <th className="px-4 py-2 border">Title</th>
            <th className="px-4 py-2 border">Type</th>
            <th className="px-4 py-2 border">Director</th>
            <th className="px-4 py-2 border">Budget</th>
            <th className="px-4 py-2 border">Location</th>
            <th className="px-4 py-2 border">Duration</th>
            <th className="px-4 py-2 border">Year</th>
            <th className="px-4 py-2 border">Actions</th>
          </tr>
        </thead>

        <tbody className="text-gray-900">
          {isLoading ? (
            <tr>
              <td colSpan={9} className="text-center py-6">
                <div className="flex justify-center items-center">
                  <div className="w-6 h-6 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                  <span className="ml-3 text-gray-600">Loading...</span>
                </div>
              </td>
            </tr>
          ) : movies.length > 0 ? (
            movies.map((movie, index) => (
              <tr
                key={movie.id}
                className="hover:bg-gray-50 transition duration-150"
              >
                <td className="border px-4 py-2 text-center">{index + 1}</td>
                <td className="border px-4 py-2">{movie.title}</td>
                <td className="border px-4 py-2">{movie.type}</td>
                <td className="border px-4 py-2">{movie.director}</td>
                <td className="border px-4 py-2">{movie.budget}</td>
                <td className="border px-4 py-2">{movie.location}</td>
                <td className="border px-4 py-2">{movie.duration}</td>
                <td className="border px-4 py-2">{movie.yearTime}</td>
                <td className="border px-4 py-2 text-center">
                  <div className="flex justify-center space-x-2">
                    <button
                      onClick={() => onEdit(movie)}
                      className="bg-blue-500 hover:bg-blue-600 text-white text-sm px-3 py-1 rounded"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => onDelete(movie.id)}
                      className="bg-red-500 hover:bg-red-600 text-white text-sm px-3 py-1 rounded"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={9} className="text-center text-gray-500 py-6 border">
                No movies found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default MovieTable;
