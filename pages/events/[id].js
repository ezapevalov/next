import { getEventById } from '../../data/events_api'
import Template from '../../components/templates/template'
import DefaultErrorPage from 'next/error'
import Link from 'next/link'
import Image from 'next/image'
import {getAllEvents} from "../../data/events_api";

function EventDetailPage(props) {
  const eventData = props.eventData;
  
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
            <Image className="img-responsive" src={'/' + eventData.image} alt={eventData.image} width={500} height={200} />
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

export async function getServerSideProps(context) {
  const eventID = context.params.id;
  const eventData = await getEventById(eventID);
  
  return {
    props: {
      eventData: eventData
    }
  };
}

export default EventDetailPage;