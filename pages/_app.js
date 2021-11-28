import 'bootstrap/dist/css/bootstrap.css'
import '../public/styles/style.css'
import Head from 'next/head'
// import '../public/styles/font-awesome.min.css'

function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      <title>Default title</title>
    </Head>
    <Component {...pageProps} />
  </>
}

export default MyApp
