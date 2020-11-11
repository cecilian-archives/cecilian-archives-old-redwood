import Anniversary60Profile from "src/components/Data/Anniversary60Profile";

export const QUERY = gql`
  query FIND_ANNIVERSARY60_PROFILE_BY_ID($id: Int!) {
    anniversary60Profile: anniversary60Profile(id: $id) {
      id
      userProfileId
      title
      firstname
      surname
      prevNames
      address
      email
      phone
      otherInfo
      wouldLikeTo
      dietary
      updatedAt
    }
  }
`;

export const Loading = () => <div>Loading...</div>;

export const Empty = () => <div>Anniversary60Profile not found</div>;

export const Success = ({ anniversary60Profile }) => {
  return <Anniversary60Profile anniversary60Profile={anniversary60Profile} />;
};
