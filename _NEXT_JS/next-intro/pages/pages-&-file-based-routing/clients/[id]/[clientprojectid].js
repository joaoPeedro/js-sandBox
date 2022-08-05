import { useRouter } from "next/router";

function SelectedClientProjectPage() {
  // to deal with path/route
  const router = useRouter();

  console.log(router.pathname); //product/clientprojectid
  console.log(router.query);

  return (
    <div>
      <h1>The Project Page for a Specific Project for a Selected Client</h1>
      <p>{router.query.clientprojectid}</p>
    </div>
  );
}

export default SelectedClientProjectPage;
