import ArchiveCollection from "src/components/Data/ArchiveCollection";

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

export const Loading = () => <div>Loading...</div>;

export const Empty = () => <div>ArchiveCollection not found</div>;

export const Success = ({ archiveCollection }) => {
  return <ArchiveCollection archiveCollection={archiveCollection} />;
};
