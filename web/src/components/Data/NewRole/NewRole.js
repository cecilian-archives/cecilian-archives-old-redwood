import { useMutation, useFlash } from "@redwoodjs/web";
import { navigate, routes } from "@redwoodjs/router";
import RoleForm from "src/components/Data/RoleForm";

import { QUERY } from "src/components/Data/RolesCell";

const CREATE_ROLE_MUTATION = gql`
  mutation CreateRoleMutation($input: CreateRoleInput!) {
    createRole(input: $input) {
      id
    }
  }
`;

const NewRole = () => {
  const { addMessage } = useFlash();
  const [createRole, { loading, error }] = useMutation(CREATE_ROLE_MUTATION, {
    onCompleted: () => {
      navigate(routes.adminDataRoles());
      addMessage("Role created.", { classes: "rw-flash-success" });
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  });

  const onSave = (input) => {
    const castInput = Object.assign(input, {
      inherentEventId: parseInt(input.inherentEventId),
    });
    createRole({ variables: { input: castInput } });
  };

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Role</h2>
      </header>
      <div className="rw-segment-main">
        <RoleForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  );
};

export default NewRole;
