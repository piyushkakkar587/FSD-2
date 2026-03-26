import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  return (
    <div className="card">

      <img src={movie.image} alt={movie.title} />

      <div className="card-content">
        <h3>{movie.title}</h3>
        <p>Year: {movie.year}</p>

        <Link to={`/movie/${movie.id}`}>
          <button>View Details</button>
        </Link>
      </div>

    </div>
  );
}

export default MovieCard;