import Link from "next/link";

function HomePage() {
  return (
    <div>
      <h1>The Home Page</h1>
      <ul>
        <li>
          <Link href="/pages-&-file-based-routing/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link href="/pages-&-file-based-routing/clients">
            Clients - to see a nested router
          </Link>
        </li>
        <li>
          <Link href="/pages-&-file-based-routing/blog/september/2021">
            blogs - to see a slug router
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default HomePage;
