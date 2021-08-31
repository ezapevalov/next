import { getFeaturedEvents } from '../dummy-data'
import Template from '../components/templates/template'
import EventList from '../components/events/event-list'

function HomePage() {
  const featuredEvents = getFeaturedEvents();
  
  return (
    <Template>
      <EventList items={featuredEvents} headerTitle="Featured Events" />
    </Template>
  );
}

export default HomePage;
