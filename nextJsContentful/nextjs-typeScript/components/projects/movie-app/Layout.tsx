import React from "react";
import Header from "./Header";
import Head from "next/head";

import styles from "./styles/movie-app.module.scss";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Head>
        <title>SlowCode - MovieApp</title>
        <meta name="description" content="project to list movies" />
      </Head>
      <section className={styles.main}>
        <Header></Header>
        {children}
      </section>
    </>
  );
};

export default Layout;
