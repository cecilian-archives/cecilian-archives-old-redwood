import { useMutation, useFlash } from "@redwoodjs/web";
import { navigate, routes } from "@redwoodjs/router";
import AccessKeyForm from "src/components/Data/AccessKeyForm";

import { QUERY } from "src/components/Data/AccessKeysCell";

const CREATE_ACCESS_KEY_MUTATION = gql`
  mutation CreateAccessKeyMutation($input: CreateAccessKeyInput!) {
    createAccessKey(input: $input) {
      id
    }
  }
`;

const NewAccessKey = () => {
  const { addMessage } = useFlash();
  const [createAccessKey, { loading, error }] = useMutation(
    CREATE_ACCESS_KEY_MUTATION,
    {
      onCompleted: () => {
        navigate(routes.adminDataAccessKeys());
        addMessage("AccessKey created.", { classes: "rw-flash-success" });
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
      ownerId: parseInt(input.ownerId),
    });
    createAccessKey({ variables: { input: castInput } });
  };

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New AccessKey</h2>
      </header>
      <div className="rw-segment-main">
        <AccessKeyForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  );
};

export default NewAccessKey;
