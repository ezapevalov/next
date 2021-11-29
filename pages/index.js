import Head from 'next/head'

import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'

import Template from '../components/templates/template'
import Home from '../components/blog/home'

function HomePage(props) {
  return (
    <>
      <Head>
        <title>NextJS Blog - Main page</title>
        <meta name="description" content="A Blog about programming" />
      </Head>
      <Template>
        <ReactNotification />
        <Home />
      </Template>
    </>
  );
  
}

export default HomePage;
