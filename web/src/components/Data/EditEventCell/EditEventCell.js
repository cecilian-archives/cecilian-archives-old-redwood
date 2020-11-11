import { useMutation, useFlash } from "@redwoodjs/web";
import { navigate, routes } from "@redwoodjs/router";
import EventForm from "src/components/Data/EventForm";

export const QUERY = gql`
  query FIND_EVENT_BY_ID($id: Int!) {
    event: event(id: $id) {
      id
      type
      name
      inherentYearId
      startDate
      endDate
      createdAt
      updatedAt
      deletedAt
    }
  }
`;
const UPDATE_EVENT_MUTATION = gql`
  mutation UpdateEventMutation($id: Int!, $input: UpdateEventInput!) {
    updateEvent(id: $id, input: $input) {
      id
      type
      name
      inherentYearId
      startDate
      endDate
      createdAt
      updatedAt
      deletedAt
    }
  }
`;

export const Loading = () => <div>Loading...</div>;

export const Success = ({ event }) => {
  const { addMessage } = useFlash();
  const [updateEvent, { loading, error }] = useMutation(UPDATE_EVENT_MUTATION, {
    onCompleted: () => {
      navigate(routes.adminDataEvents());
      addMessage("Event updated.", { classes: "rw-flash-success" });
    },
  });

  const onSave = (input, id) => {
    const castInput = Object.assign(input, {
      inherentYearId: parseInt(input.inherentYearId),
    });
    updateEvent({ variables: { id, input: castInput } });
  };

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Event {event.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <EventForm
          event={event}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  );
};
