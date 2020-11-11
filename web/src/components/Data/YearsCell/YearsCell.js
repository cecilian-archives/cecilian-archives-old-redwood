import { Link, routes } from "@redwoodjs/router";

import Years from "src/components/Data/Years";

export const QUERY = gql`
  query YEARS {
    years {
      id
      slug
      name
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
      {"No years yet. "}
      <Link to={routes.adminDataNewYear()} className="rw-link">
        {"Create one?"}
      </Link>
    </div>
  );
};

export const Success = ({ years }) => {
  return <Years years={years} />;
};
