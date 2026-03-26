import { useParams } from "react-router-dom";

const movies = [
  { id: 1, title: "Avengers", year: 2019, description: "Marvel movie" },
  { id: 2, title: "Batman", year: 2022, description: "DC movie" },
  { id: 3, title: "Spider-Man", year: 2021, description: "Marvel hero movie" }
];

function MovieDetails() {

  const { id } = useParams();

  const movie = movies.find(m => m.id === parseInt(id));

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>Year: {movie.year}</p>
      <p>{movie.description}</p>
    </div>
  );
}

export default MovieDetails;