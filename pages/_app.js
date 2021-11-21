import Head from "next/head"
import Layout from "../components/Layout"
import GlobalStyle from "../components/theme/GlobalStyle"
import Theme from "../components/theme/Theme"

function MyApp({ Component, pageProps }) {
  //Change 'true/false" in order to show the open / close mode of the page.
  const isCourseOpen = true

  return (
    <>
      <GlobalStyle />
      <Theme>
        <Head>
          <title>TeachT3ch</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin={true}
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <Layout>
          <Component {...pageProps} isCourseOpen={isCourseOpen} />
        </Layout>
      </Theme>
    </>
  )
}

export default MyApp
