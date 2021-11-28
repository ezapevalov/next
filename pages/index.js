import Head from 'next/head'

import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'

import { getFeaturedEvents } from '../data/events_api'
import Template from '../components/templates/template'
import EventList from '../components/events/event-list'

function HomePage(props) {
  return (
    <>
      <Head>
        <title>NextJS Events</title>
        <meta name="description" content="Find a lot of great Events for programmers" />
      </Head>
      <Template>
        <ReactNotification />
        <EventList items={props.featuredEvents} headerTitle="Featured Events" />
      </Template>
    </>
  );
  
}

export default HomePage;

export async function getServerSideProps(context) {
  const featuredEvents = await getFeaturedEvents();
  
  return {
    props: {
      featuredEvents: featuredEvents
    }
  }
}
