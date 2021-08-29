import Link from "next/link";

const index = () => {
  return (
    <div>
      <h1>Page pre-rendering</h1>
      <ul>
        <li>
          <Link href="/page-pre-rendering/get-static-props">
            get-static-props
          </Link>
        </li>
        <li>
          <Link href="/page-pre-rendering/get-static-paths/1">
            get-static-paths
          </Link>
        </li>
        <li>
          <Link href="/page-pre-rendering/get-server-side-props">
            get-server-side-props
          </Link>
        </li>
        <li>
          <Link href="/page-pre-rendering/client-side-data-fetching">
            client-side-data-fetching
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default index;
