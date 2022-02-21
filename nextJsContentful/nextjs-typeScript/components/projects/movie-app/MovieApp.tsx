import React from "react";
import Header from "./Header";

import styles from "./styles/movie-app.module.scss";
import MovieItem from "./MovieItem";

// const MovieApp = ({ Children }: { children: React.ReactNode }) => {
const MovieApp = ({
  movies,
  children,
}: {
  movies: {
    page: number;
    results: {
      title: String;
      backdrop_path: String;
      overview: String;
      adult: Boolean;
      gender_ids: number[];
      id: number;
    }[];
    total_pages: number;
    total_results: number;
  };
  children?: React.ReactNode;
}) => {
  console.log(movies);

  return (
    <>
      <section className={styles.main}>
        <Header></Header>
        <section>
          {movies.results.map((movie) => (
            <React.Fragment key={movie.id}>
              <MovieItem {...movie} />
            </React.Fragment>
          ))}

          {children}
        </section>
      </section>
    </>
  );
};

export default MovieApp;
