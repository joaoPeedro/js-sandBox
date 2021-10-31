import Link from "next/link";

function HomePage(props) {
  const { products } = props;
  return (
    <ul>
      <li>
        <Link href="/pages-&-file-based-routing">
          pages-&-file-based-routing
        </Link>
      </li>
      <li>
        <Link href="/page-pre-rendering">page-pre-rendering</Link>
      </li>
      <li>
        <Link href="/optimize-next-app">optimize-next-app</Link>
      </li>
      <li>TEST RENDER</li>
      {products.map((product) => (
        <li key={product.id}> {product.title}</li>
      ))}
    </ul>
  );
}

export const getStaticProps = async () => {
  return {
    props: {
      products: [
        {
          id: 1,
          title: "product one",
        },
      ],
    },
  };
};

export default HomePage;
