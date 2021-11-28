import NewsSubscription from '../../components/events/news-subscription'
import EventItem from './event-item'

function EventList(props) {
  const { items, headerTitle } = props;
  
  if(!items) return;
  
  return (
    <div className="event" id="event">
      <div className="container">
        <NewsSubscription />
  
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