import { Link } from "react-router-dom";
import type { Movie } from "../../types/movie";

interface Props {
  movie: Movie;
}

const MovieCard = ({ movie }: Props) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition">
      <img
        src={movie.posterUrl || "/placeholder.jpg"}
        alt={movie.title}
        className="w-full h-60 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-bold">{movie.title}</h3>
        <p className="text-sm text-gray-500">{movie.director}</p>
        <Link to={`/movies/${movie.id}`} className="text-blue-500 mt-2 block">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default MovieCard;
