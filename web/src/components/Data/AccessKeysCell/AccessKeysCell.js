import { Link, routes } from "@redwoodjs/router";

import AccessKeys from "src/components/Data/AccessKeys";

export const QUERY = gql`
  query ACCESS_KEYS {
    accessKeys {
      id
      key
      ownerId
      createdAt
      updatedAt
      removedAt
    }
  }
`;

export const Loading = () => <div>Loading...</div>;

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {"No accessKeys yet. "}
      <Link to={routes.adminDataNewAccessKey()} className="rw-link">
        {"Create one?"}
      </Link>
    </div>
  );
};

export const Success = ({ accessKeys }) => {
  return <AccessKeys accessKeys={accessKeys} />;
};
