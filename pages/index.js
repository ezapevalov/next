import { getFeaturedEvents } from '../data/events_api'
import Template from '../components/templates/template'
import EventList from '../components/events/event-list'

function HomePage(props) {
  return (
    <Template>
      <EventList items={props.featuredEvents} headerTitle="Featured Events" />
    </Template>
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
