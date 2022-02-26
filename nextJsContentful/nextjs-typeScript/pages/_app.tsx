import "../styles/global.scss";
// import { AppProps } from "next/app";

// function App({ Component, pageProps }: AppProps) {
//   console.log({ Component, pageProps });
//   return <Component {...pageProps} />;
// }

// export default App;

import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function App({ Component, pageProps }: AppPropsWithLayout) {
  console.log({ Component, pageProps });

  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(<Component {...pageProps} />);
}

export default App;
