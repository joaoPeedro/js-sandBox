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

  let dacimalPatern = /\.\d*/g;
  let vote = vote_average?.toString().replace(dacimalPatern, "");
  let voteDecimal = vote_average?.toString().match(dacimalPatern)?.join("");

  // console.log({ voteDecimal });

  return (
    <article className={styles.movie_item}>
      <div className={styles.content}>
        <header>
          <h5>{title}</h5>
        </header>
        <p>{overview}</p>
      </div>
      <div className={styles.cover}>
        <span className={`${styles.vote}`}>
          {vote}
          <span style={{ fontSize: "0.6em" }}> {voteDecimal}</span>
        </span>
        <Image
        alt={`${title}`}
          // src={"https://image.tmdb.org/t/p/w500" + backdrop_path}
          // src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
          src={`https://image.tmdb.org/t/p/w440_and_h660_face${backdrop_path}`}
          // src={`https://www.themoviedb.org/t/p/w440_and_h660_face${backdrop_path}`}
          //layout={"responsive"}
          width={440}
          height={660}
          //layout={"intrinsic"}
          className={styles.loading_img}
          onLoad={handlerClick}
          //fill
                sizes="100%"
      style={{
        width: '100%',
        height: 'auto',
      }}
        />
      </div>
    </article>
  );
};

export default MovieItem;
