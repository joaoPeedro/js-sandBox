import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="EN">
        <Head>
          <title>Titulo genérico da pag definido no _document</title>
        </Head>
        <body>
          <h1>Definido no _document vai fazer parte de todas as pags :D</h1>
          <div id="overlays"></div>
          <Main />
          <h3>Definido no _document depois do main</h3>
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
