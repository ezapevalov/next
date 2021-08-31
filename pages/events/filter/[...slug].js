import { useRouter } from 'next/router'
import { getFilteredEvents } from '../../../dummy-data'
import DefaultErrorPage from 'next/error'
import Template from '../../../components/templates/template'
import EventList from '../../../components/events/event-list'

function EventFilterPage() {
  const router = useRouter();
  const filters = router.query.slug;
  const monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
  
  if(!filters) {
    return <DefaultErrorPage statusCode={404} />
  }
  
  const filterYear = +filters[0];
  const filterMonth = +filters[1];
  
  if(isNaN(filterYear) || isNaN(filterMonth)) {
    return <DefaultErrorPage statusCode={404} />
  }
  
  const filteredEvents = getFilteredEvents({
    year: filterYear,
    month: filterMonth
  });
  
  if(!filteredEvents || !filteredEvents.length) {
    return <h1>Not Found</h1>
  }
  
  return (
    <Template>
      <EventList items={filteredEvents} headerTitle={`Events for ${monthNames[filterMonth-1]}/${filterYear}`} />
    </Template>
  );
}

export default EventFilterPage;