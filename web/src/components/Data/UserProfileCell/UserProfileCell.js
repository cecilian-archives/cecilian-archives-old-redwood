import UserProfile from "src/components/Data/UserProfile";

export const QUERY = gql`
  query FIND_USER_PROFILE_BY_ID($id: Int!) {
    userProfile: userProfile(id: $id) {
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

export const Empty = () => <div>UserProfile not found</div>;

export const Success = ({ userProfile }) => {
  return <UserProfile userProfile={userProfile} />;
};
