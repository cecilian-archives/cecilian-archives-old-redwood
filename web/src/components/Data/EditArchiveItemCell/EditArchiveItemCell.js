import { useMutation, useFlash } from "@redwoodjs/web";
import { navigate, routes } from "@redwoodjs/router";
import ArchiveItemForm from "src/components/Data/ArchiveItemForm";

export const QUERY = gql`
  query FIND_ARCHIVE_ITEM_BY_ID($id: Int!) {
    archiveItem: archiveItem(id: $id) {
      id
      slug
      archiveRef
      type
      associatedDate
      notes
      authorId
      createdAt
      updatedAt
      deletedAt
      createdById
      updatedById
    }
  }
`;
const UPDATE_ARCHIVE_ITEM_MUTATION = gql`
  mutation UpdateArchiveItemMutation(
    $id: Int!
    $input: UpdateArchiveItemInput!
  ) {
    updateArchiveItem(id: $id, input: $input) {
      id
      slug
      archiveRef
      type
      associatedDate
      notes
      authorId
      createdAt
      updatedAt
      deletedAt
      createdById
      updatedById
    }
  }
`;

export const Loading = () => <div>Loading...</div>;

export const Success = ({ archiveItem }) => {
  const { addMessage } = useFlash();
  const [updateArchiveItem, { loading, error }] = useMutation(
    UPDATE_ARCHIVE_ITEM_MUTATION,
    {
      onCompleted: () => {
        navigate(routes.adminDataArchiveItems());
        addMessage("ArchiveItem updated.", { classes: "rw-flash-success" });
      },
    }
  );

  const onSave = (input, id) => {
    const castInput = Object.assign(input, {
      authorId: parseInt(input.authorId),
      createdById: parseInt(input.createdById),
      updatedById: parseInt(input.updatedById),
    });
    updateArchiveItem({ variables: { id, input: castInput } });
  };

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit ArchiveItem {archiveItem.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <ArchiveItemForm
          archiveItem={archiveItem}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  );
};
