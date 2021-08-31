import { useRouter } from 'next/router'
import { getEventById } from '../../dummy-data'
import Template from '../../components/templates/template'
import DefaultErrorPage from 'next/error'
import Link from 'next/link'

function EventDetailPage() {
  const router = useRouter();
  const eventId = router.query.id;
  const eventData = getEventById(eventId);
  
  if(!eventData) {
    return <DefaultErrorPage statusCode={404} />
  }
  
  const prettyDate = new Date(eventData.date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
  
  return (
    <Template>
      <div className="blog text-center" id="blog">
        <div className="container">
          <div className="default-heading">
            <h2>{eventData.title}</h2>
          </div>
          <div className="row">
            <div className="entry">
            <img className="img-responsive" src={'/' + eventData.image} alt={eventData.image} />
            <span className="sub-text">Date: {prettyDate}. Location: {eventData.location}</span>
            <p>{eventData.description}</p>
            </div>
          </div>
          <div className="text-center">
            <Link href="/" className="btn btn-default">Featured Events</Link>
          </div>
          <div className="text-center">
            <Link href="/events" className="btn btn-default">All Events</Link>
          </div>
        </div>
      </div>
    </Template>
  );
}

export default EventDetailPage;