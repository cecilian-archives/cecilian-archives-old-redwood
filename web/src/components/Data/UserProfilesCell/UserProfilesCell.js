import { Link, routes } from "@redwoodjs/router";

import UserProfiles from "src/components/Data/UserProfiles";

export const QUERY = gql`
  query USER_PROFILES {
    userProfiles {
      id
      userId
      cecilianId
      title
      firstNames
      lastNames
      otherNames
      visibility
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
      {"No userProfiles yet. "}
      <Link to={routes.adminDataNewUserProfile()} className="rw-link">
        {"Create one?"}
      </Link>
    </div>
  );
};

export const Success = ({ userProfiles }) => {
  return <UserProfiles userProfiles={userProfiles} />;
};
