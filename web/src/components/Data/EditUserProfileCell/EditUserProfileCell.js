import { useMutation, useFlash } from "@redwoodjs/web";
import { navigate, routes } from "@redwoodjs/router";
import UserProfileForm from "src/components/Data/UserProfileForm";

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
const UPDATE_USER_PROFILE_MUTATION = gql`
  mutation UpdateUserProfileMutation(
    $id: Int!
    $input: UpdateUserProfileInput!
  ) {
    updateUserProfile(id: $id, input: $input) {
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

export const Success = ({ userProfile }) => {
  const { addMessage } = useFlash();
  const [updateUserProfile, { loading, error }] = useMutation(
    UPDATE_USER_PROFILE_MUTATION,
    {
      onCompleted: () => {
        navigate(routes.adminDataUserProfiles());
        addMessage("UserProfile updated.", { classes: "rw-flash-success" });
      },
    }
  );

  const onSave = (input, id) => {
    const castInput = Object.assign(input, {
      userId: parseInt(input.userId),
      cecilianId: parseInt(input.cecilianId),
    });
    updateUserProfile({ variables: { id, input: castInput } });
  };

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit UserProfile {userProfile.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <UserProfileForm
          userProfile={userProfile}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  );
};
