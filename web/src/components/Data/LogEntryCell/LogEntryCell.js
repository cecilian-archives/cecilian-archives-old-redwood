import LogEntry from "src/components/Data/LogEntry";

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

export const Loading = () => <div>Loading...</div>;

export const Empty = () => <div>LogEntry not found</div>;

export const Success = ({ logEntry }) => {
  return <LogEntry logEntry={logEntry} />;
};
