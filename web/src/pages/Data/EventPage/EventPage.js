import EventsLayout from "src/layouts/Data/EventsLayout";
import EventCell from "src/components/Data/EventCell";

const EventPage = ({ id }) => {
  return (
    <EventsLayout>
      <EventCell id={id} />
    </EventsLayout>
  );
};

export default EventPage;
