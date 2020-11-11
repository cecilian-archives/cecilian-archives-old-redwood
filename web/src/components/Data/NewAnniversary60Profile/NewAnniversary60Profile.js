import { useMutation, useFlash } from "@redwoodjs/web";
import { navigate, routes } from "@redwoodjs/router";
import Anniversary60ProfileForm from "src/components/Data/Anniversary60ProfileForm";

import { QUERY } from "src/components/Data/Anniversary60ProfilesCell";

const CREATE_ANNIVERSARY60_PROFILE_MUTATION = gql`
  mutation CreateAnniversary60ProfileMutation(
    $input: CreateAnniversary60ProfileInput!
  ) {
    createAnniversary60Profile(input: $input) {
      id
    }
  }
`;

const NewAnniversary60Profile = () => {
  const { addMessage } = useFlash();
  const [createAnniversary60Profile, { loading, error }] = useMutation(
    CREATE_ANNIVERSARY60_PROFILE_MUTATION,
    {
      onCompleted: () => {
        navigate(routes.adminDataAnniversary60Profiles());
        addMessage("Anniversary60Profile created.", {
          classes: "rw-flash-success",
        });
      },
      // This refetches the query on the list page. Read more about other ways to
      // update the cache over here:
      // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
      refetchQueries: [{ query: QUERY }],
      awaitRefetchQueries: true,
    }
  );

  const onSave = (input) => {
    const castInput = Object.assign(input, {
      userProfileId: parseInt(input.userProfileId),
    });
    createAnniversary60Profile({ variables: { input: castInput } });
  };

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          New Anniversary60Profile
        </h2>
      </header>
      <div className="rw-segment-main">
        <Anniversary60ProfileForm
          onSave={onSave}
          loading={loading}
          error={error}
        />
      </div>
    </div>
  );
};

export default NewAnniversary60Profile;
