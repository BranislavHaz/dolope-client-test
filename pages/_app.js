import "@/styles/globals.css";
import { useRouter } from "next/router";
import { ConfiguratorStyles } from "@/styles/configurator/ConfiguratorGlobalStyles";
import Head from "next/head";

const App = ({ Component, pageProps }) => {
  const router = useRouter();
  const isConfiguratorPage = router.pathname === "/konfigurator";

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {isConfiguratorPage && <ConfiguratorStyles />}
      <Component {...pageProps} />
    </>
  );
};

export default App;
