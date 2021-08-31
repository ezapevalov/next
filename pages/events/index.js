import { getAllEvents } from '../../dummy-data'
import EventList from '../../components/events/event-list'
import Template from '../../components/templates/template'
import EventFilter from '../../components/events/event-filter'

function AllEventsPage() {
  const allEvents = getAllEvents();
  
  return (
    <div>
      <Template>
        <EventFilter />
        <EventList items={allEvents} headerTitle="All Events" />
      </Template>
    </div>
  );
}

export default AllEventsPage;