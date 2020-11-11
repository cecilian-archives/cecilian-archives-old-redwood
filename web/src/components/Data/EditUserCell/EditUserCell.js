import { useMutation, useFlash } from "@redwoodjs/web";
import { navigate, routes } from "@redwoodjs/router";
import UserForm from "src/components/Data/UserForm";

export const QUERY = gql`
  query FIND_USER_BY_ID($id: Int!) {
    user: user(id: $id) {
      id
      slug
      verifiedByKeyId
      createdAt
      updatedAt
      deletedAt
    }
  }
`;
const UPDATE_USER_MUTATION = gql`
  mutation UpdateUserMutation($id: Int!, $input: UpdateUserInput!) {
    updateUser(id: $id, input: $input) {
      id
      slug
      verifiedByKeyId
      createdAt
      updatedAt
      deletedAt
    }
  }
`;

export const Loading = () => <div>Loading...</div>;

export const Success = ({ user }) => {
  const { addMessage } = useFlash();
  const [updateUser, { loading, error }] = useMutation(UPDATE_USER_MUTATION, {
    onCompleted: () => {
      navigate(routes.adminDataUsers());
      addMessage("User updated.", { classes: "rw-flash-success" });
    },
  });

  const onSave = (input, id) => {
    const castInput = Object.assign(input, {
      verifiedByKeyId: parseInt(input.verifiedByKeyId),
    });
    updateUser({ variables: { id, input: castInput } });
  };

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit User {user.id}</h2>
      </header>
      <div className="rw-segment-main">
        <UserForm user={user} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  );
};
