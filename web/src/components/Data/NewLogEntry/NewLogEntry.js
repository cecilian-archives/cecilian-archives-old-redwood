import { useMutation, useFlash } from "@redwoodjs/web";
import { navigate, routes } from "@redwoodjs/router";
import LogEntryForm from "src/components/Data/LogEntryForm";

import { QUERY } from "src/components/Data/LogEntriesCell";

const CREATE_LOG_ENTRY_MUTATION = gql`
  mutation CreateLogEntryMutation($input: CreateLogEntryInput!) {
    createLogEntry(input: $input) {
      id
    }
  }
`;

const NewLogEntry = () => {
  const { addMessage } = useFlash();
  const [createLogEntry, { loading, error }] = useMutation(
    CREATE_LOG_ENTRY_MUTATION,
    {
      onCompleted: () => {
        navigate(routes.adminDataLogEntries());
        addMessage("LogEntry created.", { classes: "rw-flash-success" });
      },
      // This refetches the query on the list page. Read more about other ways to
      // update the cache over here:
      // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
      refetchQueries: [{ query: QUERY }],
      awaitRefetchQueries: true,
    }
  );

  const onSave = (input) => {
    createLogEntry({ variables: { input } });
  };

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New LogEntry</h2>
      </header>
      <div className="rw-segment-main">
        <LogEntryForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  );
};

export default NewLogEntry;
