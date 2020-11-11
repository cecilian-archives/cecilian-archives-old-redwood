import UserContact from "src/components/Data/UserContact";

export const QUERY = gql`
  query FIND_USER_CONTACT_BY_ID($id: Int!) {
    userContact: userContact(id: $id) {
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

export const Empty = () => <div>UserContact not found</div>;

export const Success = ({ userContact }) => {
  return <UserContact userContact={userContact} />;
};
