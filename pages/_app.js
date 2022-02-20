import Head from "next/head";
import Layout from "../components/Layout";
import GlobalStyle from "../components/theme/GlobalStyle";
import Theme from "../components/theme/Theme";

function MyApp({ Component, pageProps }) {
  //Change 'true/false" in order to show the open / close mode of the page.
  const isCourseOpen = false;

  return (
    <>
      <Head>
        <title>TeachT3ch</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <GlobalStyle />
      <Theme>
        <Layout>
          <Component {...pageProps} isCourseOpen={isCourseOpen} />
        </Layout>
      </Theme>
    </>
  );
}

export default MyApp;
