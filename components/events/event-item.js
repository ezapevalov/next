import Link from 'next/link'
import Image from 'next/image'

function EventItem(props) {
  const { item } = props;
  const prettyDate = new Date(item.date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
  
  return (
      <div className="col-md-4 col-sm-4">
        <div className="event-item">
          <Image className="img-responsive" src={'/' + item.image} alt={item.title} width={600} height={400} />
          <h4><Link href={`/events/${item.id}`}>{item.title}</Link></h4>
          <span className="sub-text">Date: {prettyDate}. Location: {item.location}</span>
          <p>{item.description}</p>
        </div>
      </div>
  );
}

export default EventItem;