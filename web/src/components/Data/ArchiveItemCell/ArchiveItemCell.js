import ArchiveItem from "src/components/Data/ArchiveItem";

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

export const Loading = () => <div>Loading...</div>;

export const Empty = () => <div>ArchiveItem not found</div>;

export const Success = ({ archiveItem }) => {
  return <ArchiveItem archiveItem={archiveItem} />;
};
