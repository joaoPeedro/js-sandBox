//file system acess
import fs from "fs";
import Link from "next/link";
import Head from "next/head";
import path from "path";

const index = (props) => {
  const {products} = props;
  return (
    <>
      <Head>
        <title>{product.title}</title>
        <meta name="description" content={product.title} />
      </Head>
      <h2>products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link href={`/page-pre-rendering/get-static-paths/${product.id}`}>
              <p>
                {product.id}: {product.title}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

// podia ser um fetch aqui
const getData = async () => {
  // cwd: corrent working directory
  const filePath = path.join(
    process.cwd(),
    "pages/page-pre-rendering/data",
    "dummy-data.json"
  );
  const jsonData = await fs.readFileSync(filePath);
  const data = JSON.parse(jsonData);

  return data;
};

// this function run's on the build process
// to pre fectch the data
// data will be passed to props component
export const getStaticProps = async (context) => {
  const data = await getData();
  return {
    props: {
      products: data.products,
    },
    //incremental static generation
    // numbers of seconds that NextJs will wait until regenerat this page
    // time in seconds to rerender the page/props
    // when user visite the page
    revalidate: 600, // ten minutes

    // tipial case when you do not have data to show
    notFound: false, //boolean default is false

    // redirect - if you need to redirect the user to other page
    // redirect: {
    //   destination : "/noData"
    // }
  };
};

export default index;
