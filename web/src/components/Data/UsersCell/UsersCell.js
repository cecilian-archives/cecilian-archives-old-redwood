import { Link, routes } from "@redwoodjs/router";

import Users from "src/components/Data/Users";

export const QUERY = gql`
  query USERS {
    users {
      id
      slug
      verifiedByKeyId
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
      {"No users yet. "}
      <Link to={routes.adminDataNewUser()} className="rw-link">
        {"Create one?"}
      </Link>
    </div>
  );
};

export const Success = ({ users }) => {
  return <Users users={users} />;
};
