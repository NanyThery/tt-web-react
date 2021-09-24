import "../styles/normalize.css"
import Head from "next/head"
import Theme from "../components/Theme/Theme"
import GlobalStyle from "../components/theme/GlobalStyle"
import Layout from "../components/Layout"

function MyApp({ Component, pageProps }) {
  return (
    <Theme>
      <GlobalStyle />
      <Head>
        <title>TeachT3ch</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Theme>
  )
}

export default MyApp
