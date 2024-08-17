import { useRouter } from "next/router";
import { GlobalStyles } from "@/styles/_app.styles";
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
      <GlobalStyles />
      {isConfiguratorPage && <ConfiguratorStyles />}
      <Component {...pageProps} />
    </>
  );
};

export default App;
