import { useEffect, useState } from "react";
import { getTodayMovie } from "@api-requests/getTodayMovie.js";
import MovieList from "@components/MovieList/MovieList";
import styles from "./HomePage.module.css";

export const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const moviesData = await getTodayMovie();
        setMovies(moviesData.results);
      } catch (error) {
        console.error("Error happened during fetching of movies:", error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div>
      <h1 className={styles.homePageTitle}>Trending today</h1>
      <MovieList movies={movies} />
    </div>
  );
};

export default HomePage;
