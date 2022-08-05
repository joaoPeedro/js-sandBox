import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 4000);
  }, []);

  return (
    <div>
      <h1>404</h1>
      <h4>Page not found! :(</h4>
      <br />
      <p>
        redirect to <Link href={"/"}>Home</Link>
      </p>
    </div>
  );
};

export default NotFound;
