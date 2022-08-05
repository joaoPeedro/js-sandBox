import { createClient } from "contentful";
import React from "react";
import RecipeCard from "../components/RecipeCard";

export default function Recipes({ recipes }) {
  console.log({ recipes });
  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <React.Fragment key={recipe.sys.id}>
          <RecipeCard keyRec={recipe.sys.id} recipe={recipe}></RecipeCard>
        </React.Fragment>
      ))}
      <style jsx>{`
        .recipe-list {
          max-width: 350px;
        }
      `}</style>
    </div>
  );
}

export const getStaticProps = async () => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({ content_type: "recipe" });

  return {
    props: {
      recipes: res.items,
    },
    revalidate: 600,
  };
};
