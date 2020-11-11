import { useMutation, useFlash } from "@redwoodjs/web";
import { navigate, routes } from "@redwoodjs/router";
import ArchiveItemCecilianForm from "src/components/Data/ArchiveItemCecilianForm";

export const QUERY = gql`
  query FIND_ARCHIVE_ITEM_CECILIAN_BY_ID($id: Int!) {
    archiveItemCecilian: archiveItemCecilian(id: $id) {
      id
      cecilianId
      itemId
      addedAt
      removedAt
    }
  }
`;
const UPDATE_ARCHIVE_ITEM_CECILIAN_MUTATION = gql`
  mutation UpdateArchiveItemCecilianMutation(
    $id: Int!
    $input: UpdateArchiveItemCecilianInput!
  ) {
    updateArchiveItemCecilian(id: $id, input: $input) {
      id
      cecilianId
      itemId
      addedAt
      removedAt
    }
  }
`;

export const Loading = () => <div>Loading...</div>;

export const Success = ({ archiveItemCecilian }) => {
  const { addMessage } = useFlash();
  const [updateArchiveItemCecilian, { loading, error }] = useMutation(
    UPDATE_ARCHIVE_ITEM_CECILIAN_MUTATION,
    {
      onCompleted: () => {
        navigate(routes.adminDataArchiveItemCecilians());
        addMessage("ArchiveItemCecilian updated.", {
          classes: "rw-flash-success",
        });
      },
    }
  );

  const onSave = (input, id) => {
    const castInput = Object.assign(input, {
      cecilianId: parseInt(input.cecilianId),
      itemId: parseInt(input.itemId),
    });
    updateArchiveItemCecilian({ variables: { id, input: castInput } });
  };

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit ArchiveItemCecilian {archiveItemCecilian.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <ArchiveItemCecilianForm
          archiveItemCecilian={archiveItemCecilian}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  );
};
