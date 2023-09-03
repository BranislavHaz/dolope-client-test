import { GlobalStyles } from "./_app.styles";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
};

export default App;
