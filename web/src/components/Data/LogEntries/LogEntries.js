import { useMutation, useFlash } from "@redwoodjs/web";
import { Link, routes } from "@redwoodjs/router";

import { QUERY } from "src/components/Data/LogEntriesCell";

const DELETE_LOG_ENTRY_MUTATION = gql`
  mutation DeleteLogEntryMutation($id: Int!) {
    deleteLogEntry(id: $id) {
      id
    }
  }
`;

const MAX_STRING_LENGTH = 150;

const truncate = (text) => {
  let output = text;
  if (text && text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + "...";
  }
  return output;
};

const jsonTruncate = (obj) => {
  return truncate(JSON.stringify(obj, null, 2));
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

const LogEntriesList = ({ logEntries }) => {
  const { addMessage } = useFlash();
  const [deleteLogEntry] = useMutation(DELETE_LOG_ENTRY_MUTATION, {
    onCompleted: () => {
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
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Timestamp</th>
            <th>Log level</th>
            <th>Source</th>
            <th>Log line</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {logEntries.map((logEntry) => (
            <tr key={logEntry.id}>
              <td>{truncate(logEntry.id)}</td>
              <td>{timeTag(logEntry.timestamp)}</td>
              <td>{truncate(logEntry.logLevel)}</td>
              <td>{truncate(logEntry.source)}</td>
              <td>{truncate(logEntry.logLine)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.adminDataLogEntry({ id: logEntry.id })}
                    title={"Show logEntry " + logEntry.id + " detail"}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.adminDataEditLogEntry({ id: logEntry.id })}
                    title={"Edit logEntry " + logEntry.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <a
                    href="#"
                    title={"Delete logEntry " + logEntry.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(logEntry.id)}
                  >
                    Delete
                  </a>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LogEntriesList;
