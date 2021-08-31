import EventItem from './event-item'

function EventList(props) {
  const { items, headerTitle } = props;
  
  return (
    <div className="event" id="event">
      <div className="container">
        <div className="default-heading">
          <h2>{headerTitle}</h2>
        </div>
        <div className="row">
          {items.map(item => <EventItem key={item.id} item={item} />)}
        </div>
      </div>
    </div>
  );
}

export default EventList;