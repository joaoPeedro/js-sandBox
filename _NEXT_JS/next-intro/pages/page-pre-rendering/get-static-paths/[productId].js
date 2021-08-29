import { Fragment } from "react";
//file system acess
import fs from "fs";
import path from "path";

const ProductDetailPage = (props) => {
  const { loadedProduct } = props;

  // if fallback getStaticPaths is true
  // you need a loading/noData state
  if (!loadedProduct) return <h1>Loading...</h1>;

  return (
    <Fragment>
      <h1>{loadedProduct.title}</h1>
      <h6>Description</h6>
      <p>{loadedProduct.description}</p>
    </Fragment>
  );
};

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

//tell to nextJs the pages needed to render
const getStaticPaths = async () => {
  const data = await getData();

  const ids = data.products.map((product) => product.id);
  const patsWithParams = ids.map((id) => ({
    params: {
      productId: id,
    },
  }));
  return {
    // shold return an array with path objects
    paths: patsWithParams,

    //fallback - BOLLEAN
    // false if the obj have all paths in the array
    // true||"blocking" generat the page when is needed
    //true de forma async "bom para criar uma pag de fallback para o user a dizer que está a carregar, para seo n será tão bom"
    //"blocking" - bloqueia o pedido da pag até ter a pag renderizada
    fallback: "blocking", // neste caso o indicado é false pk estamos a gerar todos os paths
  };
};

const getStaticProps = async (context) => {
  console.log(context);
  // get params page
  const { params } = context;
  const productId = params.productId;

  const data = await getData();
  const product = data.products.find((product) => product.id === productId);

  if (!product) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      loadedProduct: product,
    },
  };
};

export default ProductDetailPage;
export { getStaticProps, getStaticPaths };
