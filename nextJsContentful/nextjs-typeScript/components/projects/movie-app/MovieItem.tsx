import React from "react";
import Image from "next/image";
import styles from "./styles/movie-app.module.scss";

const MovieItem = ({
  title,
  backdrop_path,
  overview,
  vote_average,
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
  vote_average: number;
}) => {
  const handlerClick = (event) => {
    const target = event.target as HTMLElement;

    if (target)
      (target as HTMLButtonElement).classList.remove(styles.loading_img);
  };

  return (
    <article className={styles.movie_item}>
      <div className={styles.content}>
        <header>
          <h5>{title}</h5>
        </header>
        <p>{overview}</p>
      </div>
      <div className={styles.cover}>
        <span className={`${styles.vote} `}>{vote_average}</span>
        <Image
          // src={"https://image.tmdb.org/t/p/w500" + backdrop_path}
          // src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
          src={`https://image.tmdb.org/t/p/w440_and_h660_face${backdrop_path}`}
          // src={`https://www.themoviedb.org/t/p/w440_and_h660_face${backdrop_path}`}
          // layout={"responsive"}
          // layout={"intrinsic"}
          className={styles.loading_img}
          onLoad={handlerClick}
          width={440}
          height={660}
        />
      </div>
    </article>
  );
};

export default MovieItem;
