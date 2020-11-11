import { Link, routes } from "@redwoodjs/router";

import Events from "src/components/Data/Events";

export const QUERY = gql`
  query EVENTS {
    events {
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

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {"No events yet. "}
      <Link to={routes.adminDataNewEvent()} className="rw-link">
        {"Create one?"}
      </Link>
    </div>
  );
};

export const Success = ({ events }) => {
  return <Events events={events} />;
};
