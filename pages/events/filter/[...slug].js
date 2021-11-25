import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { getAllEvents, getFilteredEvents } from '../../../data/events_api'
import useSWR from 'swr'

import DefaultErrorPage from 'next/error'
import Template from '../../../components/templates/template'
import EventList from '../../../components/events/event-list'

function EventFilterPage(props) {
  const router = useRouter();
  const filters = router.query.slug;
  const [loadedEvents, setLoadedEvents] = useState();
  const monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
  
  if(props.hasError) {
    return <DefaultErrorPage statusCode={404} />
  }
  
  // Server-Side Data
  if(props.filteredEvents) {
    const headerTitle = `Events for ${monthNames[props.filter.month-1]}/${props.filter.year}`;
  
    return (
      <Template>
        <EventList items={props.filteredEvents} headerTitle={headerTitle} />
      </Template>
    );
  }
  
  // Fetch Data from Backend
  const eventsURL = "https://react-refresh-c3cfa-default-rtdb.firebaseio.com/events.json";
  const { data, error } = useSWR(eventsURL);
  
  useEffect(() => {
    if(data) {
      const events = [];
  
      for(const key in data) {
        events.push({
          id: key,
          ...data[key]
        })
      }
  
      setLoadedEvents(events)
    }
  });
  
  if(!loadedEvents) {
    return <p>Loading...</p>
  }
  
  // Events are loaded! Filter and show them!
  const filterYear = +filters[0];
  const filterMonth = +filters[1];
  
  if(isNaN(filterYear)) return <p>filterYear is NaN</p>;
  if(isNaN(filterMonth)) return <p>filterMonth is NaN</p>;
  
  const filteredEvents = loadedEvents.filter((event) => {
    const eventDate = new Date(event.date);
    return eventDate.getFullYear() === filterYear && eventDate.getMonth() === filterMonth - 1;
  });
  
  if(!filteredEvents || !filteredEvents.length) {
    return <p>No events for such filter params</p>
  }
  
  const headerTitle = `Events for ${monthNames[filterMonth-1]}/${filterYear}`;
  
  return (
    <Template>
      <EventList items={filteredEvents} headerTitle={headerTitle} />
    </Template>
  );
}

export async function getServerSideProps(context) {
  const filters = context.params.slug;
  
  const filterYear = +filters[0];
  const filterMonth = +filters[1];
  
  if(isNaN(filterYear) || isNaN(filterMonth)) {
    return {
      props: {
        hasError: true
      }
    };
  }
  
  const filteredEvents = await getFilteredEvents({
    year: filterYear,
    month: filterMonth
  });
  
  if(!filteredEvents || !filteredEvents.length) {
    return {
      props: {
        hasError: true
      }
    };
  }
  
  return {
    props: {
      filteredEvents: filteredEvents,
      filter: {
        month: filterMonth,
        year: filterYear
      }
    }
  };
}

export default EventFilterPage;