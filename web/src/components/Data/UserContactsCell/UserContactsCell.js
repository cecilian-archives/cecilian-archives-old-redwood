import { Link, routes } from "@redwoodjs/router";

import UserContacts from "src/components/Data/UserContacts";

export const QUERY = gql`
  query USER_CONTACTS {
    userContacts {
      id
      userId
      type
      customType
      value
      notes
      visibility
      createdAt
      updatedAt
      deletedAt
      userProfileId
    }
  }
`;

export const Loading = () => <div>Loading...</div>;

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {"No userContacts yet. "}
      <Link to={routes.adminDataNewUserContact()} className="rw-link">
        {"Create one?"}
      </Link>
    </div>
  );
};

export const Success = ({ userContacts }) => {
  return <UserContacts userContacts={userContacts} />;
};
