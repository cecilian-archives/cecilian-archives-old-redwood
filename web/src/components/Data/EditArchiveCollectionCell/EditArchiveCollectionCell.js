import { useMutation, useFlash } from "@redwoodjs/web";
import { navigate, routes } from "@redwoodjs/router";
import ArchiveCollectionForm from "src/components/Data/ArchiveCollectionForm";

export const QUERY = gql`
  query FIND_ARCHIVE_COLLECTION_BY_ID($id: Int!) {
    archiveCollection: archiveCollection(id: $id) {
      id
      slug
      type
      name
      description
      physicalLocation
      ownerId
      viewPerms
      editPerms
      createdAt
      createdById
      updatedAt
      updatedById
      deletedAt
    }
  }
`;
const UPDATE_ARCHIVE_COLLECTION_MUTATION = gql`
  mutation UpdateArchiveCollectionMutation(
    $id: Int!
    $input: UpdateArchiveCollectionInput!
  ) {
    updateArchiveCollection(id: $id, input: $input) {
      id
      slug
      type
      name
      description
      physicalLocation
      ownerId
      viewPerms
      editPerms
      createdAt
      createdById
      updatedAt
      updatedById
      deletedAt
    }
  }
`;

export const Loading = () => <div>Loading...</div>;

export const Success = ({ archiveCollection }) => {
  const { addMessage } = useFlash();
  const [updateArchiveCollection, { loading, error }] = useMutation(
    UPDATE_ARCHIVE_COLLECTION_MUTATION,
    {
      onCompleted: () => {
        navigate(routes.adminDataArchiveCollections());
        addMessage("ArchiveCollection updated.", {
          classes: "rw-flash-success",
        });
      },
    }
  );

  const onSave = (input, id) => {
    const castInput = Object.assign(input, {
      ownerId: parseInt(input.ownerId),
      createdById: parseInt(input.createdById),
      updatedById: parseInt(input.updatedById),
    });
    updateArchiveCollection({ variables: { id, input: castInput } });
  };

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit ArchiveCollection {archiveCollection.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <ArchiveCollectionForm
          archiveCollection={archiveCollection}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  );
};
