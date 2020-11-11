import { useMutation, useFlash } from "@redwoodjs/web";
import { navigate, routes } from "@redwoodjs/router";
import LogEntryForm from "src/components/Data/LogEntryForm";

export const QUERY = gql`
  query FIND_LOG_ENTRY_BY_ID($id: Int!) {
    logEntry: logEntry(id: $id) {
      id
      timestamp
      logLevel
      source
      logLine
    }
  }
`;
const UPDATE_LOG_ENTRY_MUTATION = gql`
  mutation UpdateLogEntryMutation($id: Int!, $input: UpdateLogEntryInput!) {
    updateLogEntry(id: $id, input: $input) {
      id
      timestamp
      logLevel
      source
      logLine
    }
  }
`;

export const Loading = () => <div>Loading...</div>;

export const Success = ({ logEntry }) => {
  const { addMessage } = useFlash();
  const [updateLogEntry, { loading, error }] = useMutation(
    UPDATE_LOG_ENTRY_MUTATION,
    {
      onCompleted: () => {
        navigate(routes.adminDataLogEntries());
        addMessage("LogEntry updated.", { classes: "rw-flash-success" });
      },
    }
  );

  const onSave = (input, id) => {
    updateLogEntry({ variables: { id, input } });
  };

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit LogEntry {logEntry.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <LogEntryForm
          logEntry={logEntry}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  );
};
