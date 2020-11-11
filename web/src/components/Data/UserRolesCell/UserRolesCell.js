import { Link, routes } from "@redwoodjs/router";

import UserRoles from "src/components/Data/UserRoles";

export const QUERY = gql`
  query USER_ROLES {
    userRoles {
      id
      roleName
      accessLevel
    }
  }
`;

export const Loading = () => <div>Loading...</div>;

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {"No userRoles yet. "}
      <Link to={routes.adminDataNewUserRole()} className="rw-link">
        {"Create one?"}
      </Link>
    </div>
  );
};

export const Success = ({ userRoles }) => {
  return <UserRoles userRoles={userRoles} />;
};
