import { Link, routes } from "@redwoodjs/router";

import LogEntries from "src/components/Data/LogEntries";

export const QUERY = gql`
  query LOG_ENTRIES {
    logEntries {
      id
      timestamp
      logLevel
      source
      logLine
    }
  }
`;

export const Loading = () => <div>Loading...</div>;

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {"No logEntries yet. "}
      <Link to={routes.adminDataNewLogEntry()} className="rw-link">
        {"Create one?"}
      </Link>
    </div>
  );
};

export const Success = ({ logEntries }) => {
  return <LogEntries logEntries={logEntries} />;
};
