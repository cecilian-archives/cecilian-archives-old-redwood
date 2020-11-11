import { useMutation, useFlash } from "@redwoodjs/web";
import { navigate, routes } from "@redwoodjs/router";
import Anniversary60ProfileForm from "src/components/Data/Anniversary60ProfileForm";

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
const UPDATE_ANNIVERSARY60_PROFILE_MUTATION = gql`
  mutation UpdateAnniversary60ProfileMutation(
    $id: Int!
    $input: UpdateAnniversary60ProfileInput!
  ) {
    updateAnniversary60Profile(id: $id, input: $input) {
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

export const Success = ({ anniversary60Profile }) => {
  const { addMessage } = useFlash();
  const [updateAnniversary60Profile, { loading, error }] = useMutation(
    UPDATE_ANNIVERSARY60_PROFILE_MUTATION,
    {
      onCompleted: () => {
        navigate(routes.adminDataAnniversary60Profiles());
        addMessage("Anniversary60Profile updated.", {
          classes: "rw-flash-success",
        });
      },
    }
  );

  const onSave = (input, id) => {
    const castInput = Object.assign(input, {
      userProfileId: parseInt(input.userProfileId),
    });
    updateAnniversary60Profile({ variables: { id, input: castInput } });
  };

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Anniversary60Profile {anniversary60Profile.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <Anniversary60ProfileForm
          anniversary60Profile={anniversary60Profile}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  );
};
