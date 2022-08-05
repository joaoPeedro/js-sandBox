import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { createClient } from "contentful";

export default function RecipeDetails({ recipe }) {
  if (!recipe) {
    return <div>LOADING...</div>;
  }

  const { featureImage, title, method, ingredients } = recipe.fields;
  return (
    <div>
      Recipe Details
      <div>{title}</div>
      <div>{documentToReactComponents(method)}</div>
    </div>
  );
}

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

export const getStaticPaths = async () => {
  const res = await client.getEntries({ content_type: "recipe" });

  const paths = res.items.map((item) => {
    console.log({ item });
    return {
      params: {
        slug: item.fields.slug,
      },
    };
  });
  return {
    paths: paths,
    /**
     * false - n renderiza novas paginas
     * true - precisa de uma fallback page enquanto renderiza novas paginas
     * "blocking", renderiza novas pags mas sem falback
     */
    fallback: true,
  };
};

export const getStaticProps = async (context) => {
  const { params } = context;

  const res = await client.getEntries({
    content_type: "recipe",
    "fields.slug": params.slug, // para ir buscar apenas o item que corresponde a esta slug
  });

  /**
   * to redirect user if itens doesn't existe
   */
  if (!res.items.length) {
    return {
      redirect: "/",
      /**
       * in the future this page can existe, so this is not permanent
       */
      permanent: false,
    };
  }

  return {
    props: {
      recipe: res.items[0],
    },
    revalidate: 600,
  };
};
