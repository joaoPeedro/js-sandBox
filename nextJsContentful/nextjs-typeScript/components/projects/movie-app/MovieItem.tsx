import React from "react";
import Image from "next/image";

const MovieItem = ({
  title,
  backdrop_path,
  overview,
  adult,
  gender_ids,
  id,
}: {
  title: String;
  backdrop_path: String;
  overview: String;
  adult: Boolean;
  gender_ids: number[];
  id: number;
}) => {
  console.log(backdrop_path);

  return (
    <article>
      <Image
        // src={"https://image.tmdb.org/t/p/w500" + backdrop_path}
        src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
        // layout={"responsive"}
        // layout={"intrinsic"}
        width={500}
        height={281}
      />
      <div>
        <h3>{title}</h3>
        <p>{overview}</p>
      </div>
    </article>
  );
};

export default MovieItem;
