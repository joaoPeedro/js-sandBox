import React, { ReactElement, useEffect, useState } from "react";
import Head from "next/head";
import MovieApp from "../../../components/projects/movie-app/MovieApp";
import Layout from "../../../components/projects/movie-app/Layout";

const getMovies = async (page) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=a3b2503a4e98773409c61ea8b56e4a4a&page=${page}`
  );
  const movies = await res.json();
  return movies;
};

const index = ({ page }) => {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    getMovies(page).then((result) => {
      setMovies(result);
    });
  }, [page]);

  //   console.log(movies);

  return (
    <>
      <Head>
        <title>SlowCode - MovieApp</title>
        <meta name="description" content="project to list movies" />
      </Head>
      {!movies ? <h3>LOADING...</h3> : <MovieApp movies={movies} />}
    </>
  );
};

index.getLayout = function getLayout(page: ReactElement) {
  return <Layout userNmae={""}> {page}</Layout>;
};


export default index;
