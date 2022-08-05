import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function RecipeCard({ recipe, keyRec }) {
  const { title, slug, cookingTime, thumbnail } = recipe.fields;

  return (
    <div key={keyRec} className={"card"}>
      <h4>{title}</h4>
      <Image
        src={`https:${thumbnail.fields.file.url}`}
        width={thumbnail.fields.file.details.image.width}
        height={thumbnail.fields.file.details.image.height}
      />
      <div className={"actions"}>
        <Link href={`/recipes/${slug}`}>
          <a>cooking this</a>
        </Link>
      </div>
    </div>
  );
}
