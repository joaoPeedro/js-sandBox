import Link from "next/link";

function PortfolioPage() {
  return (
    <div>
      <h1>The Portfolio Page</h1>
      <Link
        href={{
          pathname: "/pages-&-file-based-routing/portfolio/[id]",
          query: { id: "project-5G" },
        }}
      >
        project-5G
      </Link>
    </div>
  );
}

export default PortfolioPage;
