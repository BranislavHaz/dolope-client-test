import { GlobalStyles } from "@/styles/_app.styles";
import Head from "next/head";

import { Toaster } from "react-hot-toast";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <GlobalStyles />
      <Toaster />
      <Component {...pageProps} />
    </>
  );
};

export default App;
