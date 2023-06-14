import React from "react";
import type { ReactElement } from "react";
import { createClient } from "contentful";

import MovieApp from "../../../components/projects/movie-app/MovieApp";
import Layout from "../../../components/projects/movie-app/Layout";

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

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

type ResClient = {
  items: {
    fields?: { title: string };
  }[];
};

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export async function getStaticProps(context) {
  console.log(context);

  const resClient: ResClient = await client.getEntries({
    content_type: "recipe",
    // "fields.slug": 1, // para ir buscar apenas o item que corresponde a esta slug
  });
  console.log({ resClient });
  const user = (await resClient.items[0].fields?.title) ?? "undefined";

  // const user = await resClient.items[0].json();

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
      user,
    },
    revalidate: 60 * 60 * 2,
  };
}

const PageMovies = ({ user, movies }) => {
  console.log({ user, movies });

  return <>{!movies ? <h3>LOADING...</h3> : <MovieApp movies={movies} />}</>;
};

PageMovies.getLayout = function getLayout(page: ReactElement) {
  return <Layout userNmae={""}> {page}</Layout>;
};

export default PageMovies;
