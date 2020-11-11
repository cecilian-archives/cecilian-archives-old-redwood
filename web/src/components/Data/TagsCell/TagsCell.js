import { Link, routes } from "@redwoodjs/router";

import Tags from "src/components/Data/Tags";

export const QUERY = gql`
  query TAGS {
    tags {
      id
      type
      roleId
      eventId
      yearId
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
      {"No tags yet. "}
      <Link to={routes.adminDataNewTag()} className="rw-link">
        {"Create one?"}
      </Link>
    </div>
  );
};

export const Success = ({ tags }) => {
  return <Tags tags={tags} />;
};
