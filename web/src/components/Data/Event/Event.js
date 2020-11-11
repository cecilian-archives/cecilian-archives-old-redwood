import { useMutation, useFlash } from "@redwoodjs/web";
import { Link, routes, navigate } from "@redwoodjs/router";

import { QUERY } from "src/components/Data/EventsCell";

const DELETE_EVENT_MUTATION = gql`
  mutation DeleteEventMutation($id: Int!) {
    deleteEvent(id: $id) {
      id
    }
  }
`;

const jsonDisplay = (obj) => {
  return (
    <pre>
      <code>{JSON.stringify(obj, null, 2)}</code>
    </pre>
  );
};

const timeTag = (datetime) => {
  return (
    <time dateTime={datetime} title={datetime}>
      {new Date(datetime).toUTCString()}
    </time>
  );
};

const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />;
};

const Event = ({ event }) => {
  const { addMessage } = useFlash();
  const [deleteEvent] = useMutation(DELETE_EVENT_MUTATION, {
    onCompleted: () => {
      navigate(routes.adminDataEvents());
      addMessage("Event deleted.", { classes: "rw-flash-success" });
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  });

  const onDeleteClick = (id) => {
    if (confirm("Are you sure you want to delete event " + id + "?")) {
      deleteEvent({ variables: { id } });
    }
  };

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Event {event.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{event.id}</td>
            </tr>
            <tr>
              <th>Type</th>
              <td>{event.type}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{event.name}</td>
            </tr>
            <tr>
              <th>Inherent year id</th>
              <td>{event.inherentYearId}</td>
            </tr>
            <tr>
              <th>Start date</th>
              <td>{timeTag(event.startDate)}</td>
            </tr>
            <tr>
              <th>End date</th>
              <td>{timeTag(event.endDate)}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(event.createdAt)}</td>
            </tr>
            <tr>
              <th>Updated at</th>
              <td>{timeTag(event.updatedAt)}</td>
            </tr>
            <tr>
              <th>Deleted at</th>
              <td>{timeTag(event.deletedAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.adminDataEditEvent({ id: event.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <a
          href="#"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(event.id)}
        >
          Delete
        </a>
      </nav>
    </>
  );
};

export default Event;
