import React from "react";
import styles from "./styles/movie-app.module.scss";

const Header = () => {
  return (
    <section className={styles.header}>
      <h5 className={"heading-5"}>Welcome.</h5>
      <h1 className={"heading-1"}>
        Millions of movies, TV shows and people to discover.{" "}
        <span className={"txt-color-2"}>Explore now.</span>
      </h1>
      <form>
        <input type={"text"} className={"search"} placeholder={"Search"} />
      </form>
    </section>
  );
};

export default Header;
