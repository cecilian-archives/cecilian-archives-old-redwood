import MessagePage from "src/components/MessagePage/MessagePage";
import { MyProfile } from "src/pages/MyProfilePage/MyProfilePage";

export const beforeQuery = () => {
  return { fetchPolicy: "cache-first" };
};

export const QUERY = gql`
  query MyProfileQuery {
    myProfile {
      title
      firstNames
      lastNames
      otherNames
      picture
      visibility
      createdAt
      user {
        slug
      }
      cecilian {
        displayName
      }
      accessKeys {
        key
        createdAt
        removedAt
      }
      contactDetails {
        type
        customType
        value
        notes
        visibility
      }
    }
  }
`;

export const Loading = () => (
  <MessagePage
    animatedLogo
    headerTitle="Your Profile"
    messageTitle="Retrieving data..."
  />
);

export const Empty = () => (
  <MessagePage
    headerTitle="Your Profile"
    messageTitle="No profile to display"
  />
);

export const Failure = ({ error }) => (
  <MessagePage
    headerTitle="Your Profile"
    messageTitle="Something went wrong"
    messageBody={error.message}
  />
);

export const Success = ({ myProfile }) => <MyProfile profile={myProfile} />;
