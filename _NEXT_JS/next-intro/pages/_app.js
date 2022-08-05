import "../styles/globals.css";
import Head from "next/head";
import React from "react";

function MyApp({ Component, pageProps }) {
  console.log({ Component, pageProps });
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>Titulo genérico da pag definido no _app</title>
      </Head>
      <h2>Definido no _app.js</h2>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
