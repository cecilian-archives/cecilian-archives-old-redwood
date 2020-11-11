import { useMutation, useFlash } from "@redwoodjs/web";
import { navigate, routes } from "@redwoodjs/router";
import AccessKeyForm from "src/components/Data/AccessKeyForm";

export const QUERY = gql`
  query FIND_ACCESS_KEY_BY_ID($id: Int!) {
    accessKey: accessKey(id: $id) {
      id
      key
      ownerId
      createdAt
      updatedAt
      removedAt
    }
  }
`;
const UPDATE_ACCESS_KEY_MUTATION = gql`
  mutation UpdateAccessKeyMutation($id: Int!, $input: UpdateAccessKeyInput!) {
    updateAccessKey(id: $id, input: $input) {
      id
      key
      ownerId
      createdAt
      updatedAt
      removedAt
    }
  }
`;

export const Loading = () => <div>Loading...</div>;

export const Success = ({ accessKey }) => {
  const { addMessage } = useFlash();
  const [updateAccessKey, { loading, error }] = useMutation(
    UPDATE_ACCESS_KEY_MUTATION,
    {
      onCompleted: () => {
        navigate(routes.adminDataAccessKeys());
        addMessage("AccessKey updated.", { classes: "rw-flash-success" });
      },
    }
  );

  const onSave = (input, id) => {
    const castInput = Object.assign(input, {
      ownerId: parseInt(input.ownerId),
    });
    updateAccessKey({ variables: { id, input: castInput } });
  };

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit AccessKey {accessKey.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <AccessKeyForm
          accessKey={accessKey}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  );
};
