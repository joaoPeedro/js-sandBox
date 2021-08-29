import { useRouter } from "next/router";

function ClientProjectsPage() {
  const router = useRouter();

  console.log(router.query);

  function loadProjectHandler() {
    // load data...
    router.push({
      pathname: "/pages-&-file-based-routing/clients/[id]/[clientprojectid]",
      query: { id: "max", clientprojectid: "projecto1" },
    });
  }

  return (
    <div>
      <h1>The Projects of a Given Client</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
}

export default ClientProjectsPage;
