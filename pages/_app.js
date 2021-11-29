import 'bootstrap/dist/css/bootstrap.css'
import '../public/style.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      <title>Next.js Blog</title>
    </Head>
    <Component {...pageProps} />
  </>
}

export default MyApp
