import EventsLayout from "src/layouts/Data/EventsLayout";
import EditEventCell from "src/components/Data/EditEventCell";

const EditEventPage = ({ id }) => {
  return (
    <EventsLayout>
      <EditEventCell id={id} />
    </EventsLayout>
  );
};

export default EditEventPage;
