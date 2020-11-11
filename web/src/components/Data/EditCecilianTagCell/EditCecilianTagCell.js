import { useMutation, useFlash } from "@redwoodjs/web";
import { navigate, routes } from "@redwoodjs/router";
import CecilianTagForm from "src/components/Data/CecilianTagForm";

export const QUERY = gql`
  query FIND_CECILIAN_TAG_BY_ID($id: Int!) {
    cecilianTag: cecilianTag(id: $id) {
      id
      cecilianId
      tagId
      addedAt
      removedAt
    }
  }
`;
const UPDATE_CECILIAN_TAG_MUTATION = gql`
  mutation UpdateCecilianTagMutation(
    $id: Int!
    $input: UpdateCecilianTagInput!
  ) {
    updateCecilianTag(id: $id, input: $input) {
      id
      cecilianId
      tagId
      addedAt
      removedAt
    }
  }
`;

export const Loading = () => <div>Loading...</div>;

export const Success = ({ cecilianTag }) => {
  const { addMessage } = useFlash();
  const [updateCecilianTag, { loading, error }] = useMutation(
    UPDATE_CECILIAN_TAG_MUTATION,
    {
      onCompleted: () => {
        navigate(routes.adminDataCecilianTags());
        addMessage("CecilianTag updated.", { classes: "rw-flash-success" });
      },
    }
  );

  const onSave = (input, id) => {
    const castInput = Object.assign(input, {
      cecilianId: parseInt(input.cecilianId),
      tagId: parseInt(input.tagId),
    });
    updateCecilianTag({ variables: { id, input: castInput } });
  };

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit CecilianTag {cecilianTag.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <CecilianTagForm
          cecilianTag={cecilianTag}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  );
};
