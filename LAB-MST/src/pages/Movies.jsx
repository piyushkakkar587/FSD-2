import MovieCard from "../components/MovieCard";

const movies = [
  {
    id: 1,
    title: "Avengers",
    year: 2019,
    image: "https://picsum.photos/300/400?1"
  },
  {
    id: 2,
    title: "Batman",
    year: 2022,
    image: "https://picsum.photos/300/400?2"
  },
  {
    id: 3,
    title: "Spider-Man",
    year: 2021,
    image: "https://picsum.photos/300/400?3"
  }
];

function Movies() {
  return (
    <div className="container">
      <h1>Movies</h1>

      <div className="movies-grid">
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>

    </div>
  );
}

export default Movies;