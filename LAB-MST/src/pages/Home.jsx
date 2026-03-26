import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">

      <h1>🎬 Welcome to Movie Listing App</h1>

      <p>Discover amazing movies and explore details.</p>

      <Link to="/movies">
        <button className="explore-btn">Explore Movies</button>
      </Link>

    </div>
  );
}

export default Home;