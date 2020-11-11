import { useMutation, useFlash } from "@redwoodjs/web";
import { navigate, routes } from "@redwoodjs/router";
import EventForm from "src/components/Data/EventForm";

import { QUERY } from "src/components/Data/EventsCell";

const CREATE_EVENT_MUTATION = gql`
  mutation CreateEventMutation($input: CreateEventInput!) {
    createEvent(input: $input) {
      id
    }
  }
`;

const NewEvent = () => {
  const { addMessage } = useFlash();
  const [createEvent, { loading, error }] = useMutation(CREATE_EVENT_MUTATION, {
    onCompleted: () => {
      navigate(routes.adminDataEvents());
      addMessage("Event created.", { classes: "rw-flash-success" });
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  });

  const onSave = (input) => {
    const castInput = Object.assign(input, {
      inherentYearId: parseInt(input.inherentYearId),
    });
    createEvent({ variables: { input: castInput } });
  };

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Event</h2>
      </header>
      <div className="rw-segment-main">
        <EventForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  );
};

export default NewEvent;
