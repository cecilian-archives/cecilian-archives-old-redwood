import { Link, routes } from "@redwoodjs/router";

import Cecilians from "src/components/Data/Cecilians";

export const QUERY = gql`
  query CECILIANS {
    cecilians {
      id
      slug
      displayName
      otherNames
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
      {"No cecilians yet. "}
      <Link to={routes.adminDataNewCecilian()} className="rw-link">
        {"Create one?"}
      </Link>
    </div>
  );
};

export const Success = ({ cecilians }) => {
  return <Cecilians cecilians={cecilians} />;
};
