export async function getAllEvents() {
  const eventsURL = "https://react-refresh-c3cfa-default-rtdb.firebaseio.com/events.json";
  
  console.log("getAllEvents");
  
  const response = await fetch(eventsURL);
  const data = await response.json();
  
  const events = [];
  
  for(const key in data) {
    events.push({
      id: key,
      ...data[key]
    })
  }
  
  return events;
}

export async function getFeaturedEvents() {
  const allEvents = await getAllEvents();
  
  return allEvents.filter((eventItem) => eventItem.isFeatured);
}

export async function getEventById(eventID) {
  const allEvents = await getAllEvents();
  
  return allEvents.find((eventItem) => eventItem.id === eventID);
}

export async function getFilteredEvents(dateFilter) {
  const { year, month } = dateFilter;
  const allEvents = await getAllEvents();
  
  let filteredEvents = allEvents.filter((event) => {
    const eventDate = new Date(event.date);
    return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
  });
  
  return filteredEvents;
}