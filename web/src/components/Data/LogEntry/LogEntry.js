import { useMutation, useFlash } from "@redwoodjs/web";
import { Link, routes, navigate } from "@redwoodjs/router";

import { QUERY } from "src/components/Data/LogEntriesCell";

const DELETE_LOG_ENTRY_MUTATION = gql`
  mutation DeleteLogEntryMutation($id: Int!) {
    deleteLogEntry(id: $id) {
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

const LogEntry = ({ logEntry }) => {
  const { addMessage } = useFlash();
  const [deleteLogEntry] = useMutation(DELETE_LOG_ENTRY_MUTATION, {
    onCompleted: () => {
      navigate(routes.adminDataLogEntries());
      addMessage("LogEntry deleted.", { classes: "rw-flash-success" });
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  });

  const onDeleteClick = (id) => {
    if (confirm("Are you sure you want to delete logEntry " + id + "?")) {
      deleteLogEntry({ variables: { id } });
    }
  };

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            LogEntry {logEntry.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{logEntry.id}</td>
            </tr>
            <tr>
              <th>Timestamp</th>
              <td>{timeTag(logEntry.timestamp)}</td>
            </tr>
            <tr>
              <th>Log level</th>
              <td>{logEntry.logLevel}</td>
            </tr>
            <tr>
              <th>Source</th>
              <td>{logEntry.source}</td>
            </tr>
            <tr>
              <th>Log line</th>
              <td>{logEntry.logLine}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.adminDataEditLogEntry({ id: logEntry.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <a
          href="#"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(logEntry.id)}
        >
          Delete
        </a>
      </nav>
    </>
  );
};

export default LogEntry;
