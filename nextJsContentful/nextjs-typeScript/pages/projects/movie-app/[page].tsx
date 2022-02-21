import React from "react";
import Head from "next/head";
import MovieApp from "../../../components/projects/movie-app/MovieApp";

const index = ({ movies }) => {
  console.log({ movies });

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

  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  //   console.log(process.env.MOVIE_APP_API_DISCOVER);
  const res = await fetch(
    process.env.MOVIE_APP_API_DISCOVER + context.params.page
  );
  const movies = await res.json();

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      movies,
    },
    revalidate: 60 * 60 * 2,
  };
}

export default index;
