import React, { useEffect, useState } from "react";
import Head from "next/head";
import MovieApp from "../../../components/projects/movie-app/MovieApp";

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

export const getStaticPaths = async () => {
  return {
    paths: [
      { params: { page: "1" } },
      { params: { page: "2" } },
      { params: { page: "3" } },
    ],
    /**
     * false - n renderiza novas paginas
     * true - precisa de uma fallback page enquanto renderiza novas paginas
     * "blocking", renderiza novas pags mas sem falback
     */
    fallback: true,
  };
};

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export async function getStaticProps(context) {
  console.log(context);

  return {
    props: {
      page: context.params.page,
    },
    revalidate: 60 * 60 * 2,
  };
}

export default index;
