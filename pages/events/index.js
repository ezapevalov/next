import { getAllEvents } from '../../data/events_api'
import EventList from '../../components/events/event-list'
import Template from '../../components/templates/template'
import EventFilter from '../../components/events/event-filter'

function AllEventsPage(props) {
  
  return (
    <div>
      <Template>
        <EventFilter />
        <EventList items={props.allEvents} headerTitle="All Events" />
      </Template>
    </div>
  );
}

export async function getServerSideProps() {
  const allEvents = await getAllEvents();
  
  return {
    props: {
      allEvents: allEvents
    }
  };
}

export default AllEventsPage;