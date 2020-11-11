import { Link, routes } from "@redwoodjs/router";

import Roles from "src/components/Data/Roles";

export const QUERY = gql`
  query ROLES {
    roles {
      id
      type
      name
      inherentEventId
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
      {"No roles yet. "}
      <Link to={routes.adminDataNewRole()} className="rw-link">
        {"Create one?"}
      </Link>
    </div>
  );
};

export const Success = ({ roles }) => {
  return <Roles roles={roles} />;
};
