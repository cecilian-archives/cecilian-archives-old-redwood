import { useMutation, useFlash } from "@redwoodjs/web";
import { navigate, routes } from "@redwoodjs/router";
import ArchiveItemTagForm from "src/components/Data/ArchiveItemTagForm";

export const QUERY = gql`
  query FIND_ARCHIVE_ITEM_TAG_BY_ID($id: Int!) {
    archiveItemTag: archiveItemTag(id: $id) {
      id
      itemId
      tagId
      addedAt
      removedAt
    }
  }
`;
const UPDATE_ARCHIVE_ITEM_TAG_MUTATION = gql`
  mutation UpdateArchiveItemTagMutation(
    $id: Int!
    $input: UpdateArchiveItemTagInput!
  ) {
    updateArchiveItemTag(id: $id, input: $input) {
      id
      itemId
      tagId
      addedAt
      removedAt
    }
  }
`;

export const Loading = () => <div>Loading...</div>;

export const Success = ({ archiveItemTag }) => {
  const { addMessage } = useFlash();
  const [updateArchiveItemTag, { loading, error }] = useMutation(
    UPDATE_ARCHIVE_ITEM_TAG_MUTATION,
    {
      onCompleted: () => {
        navigate(routes.adminDataArchiveItemTags());
        addMessage("ArchiveItemTag updated.", { classes: "rw-flash-success" });
      },
    }
  );

  const onSave = (input, id) => {
    const castInput = Object.assign(input, {
      itemId: parseInt(input.itemId),
      tagId: parseInt(input.tagId),
    });
    updateArchiveItemTag({ variables: { id, input: castInput } });
  };

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit ArchiveItemTag {archiveItemTag.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <ArchiveItemTagForm
          archiveItemTag={archiveItemTag}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  );
};
