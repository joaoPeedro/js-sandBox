import { useRouter } from "next/router";

function PortfolioProjectPage() {
  const router = useRouter();

  // console.log("batatas");
  // console.log(router.pathname); //project-5G
  // console.log(router.query);

  // send a request to some backend server
  // to fetch the piece of data with an id of router.query.projectid

  return (
    <div>
      <h1>The Portfolio Project Page</h1>
      <br />
      <h5>the query of router.pathname ({router.pathname}) is:</h5>
      <p>{router.query.projectid}</p>
    </div>
  );
}

export default PortfolioProjectPage;
