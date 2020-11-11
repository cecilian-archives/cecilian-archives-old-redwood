import { useMutation, useFlash } from "@redwoodjs/web";
import { navigate, routes } from "@redwoodjs/router";
import CecilianForm from "src/components/Data/CecilianForm";

export const QUERY = gql`
  query FIND_CECILIAN_BY_ID($id: Int!) {
    cecilian: cecilian(id: $id) {
      id
      slug
      displayName
      otherNames
      createdAt
      updatedAt
      deletedAt
    }
  }
`;
const UPDATE_CECILIAN_MUTATION = gql`
  mutation UpdateCecilianMutation($id: Int!, $input: UpdateCecilianInput!) {
    updateCecilian(id: $id, input: $input) {
      id
      slug
      displayName
      otherNames
      createdAt
      updatedAt
      deletedAt
    }
  }
`;

export const Loading = () => <div>Loading...</div>;

export const Success = ({ cecilian }) => {
  const { addMessage } = useFlash();
  const [updateCecilian, { loading, error }] = useMutation(
    UPDATE_CECILIAN_MUTATION,
    {
      onCompleted: () => {
        navigate(routes.adminDataCecilians());
        addMessage("Cecilian updated.", { classes: "rw-flash-success" });
      },
    }
  );

  const onSave = (input, id) => {
    updateCecilian({ variables: { id, input } });
  };

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Cecilian {cecilian.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <CecilianForm
          cecilian={cecilian}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  );
};
