import { GlobalStyles } from "@/styles/_app.styles";
import Head from "next/head";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head></Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
};

export default App;
