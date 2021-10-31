import Link from "next/link";
import Head from "next/head";

function Index() {
  return (
    <div>
      <Head>
        <title>Page with a specific HEAD</title>
        <meta
          name="description"
          content="this is a page with a specific HEAD, this parte is appended on original HEAD"
        />
      </Head>
      <h1>The Home Page</h1>
      <ul>
        <li>
          <Link href="/optimize-next-app/cenas-1">cenas 1</Link>
        </li>
        <li>
          <Link href="/optimize-next-app/cenas-2">cenas 2</Link>
        </li>
        <li>
          <Link href="/optimize-next-app/cenas-3">cenas 3</Link>
        </li>
      </ul>
      <div>
        <h3>HEAD</h3>
        <p>
          to use a generic HEAD you need to creat that on root file: _app.js
        </p>
        <p>if we have equal tags on Head - next will put the lasted tag</p>
        <br />
        <h3>Document</h3>
        <p>
          to personalize page document, you need to use the root
          file:_document.js
        </p>
      </div>
    </div>
  );
}

export default Index;
