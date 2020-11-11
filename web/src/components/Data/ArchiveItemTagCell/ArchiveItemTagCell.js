import ArchiveItemTag from "src/components/Data/ArchiveItemTag";

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

export const Loading = () => <div>Loading...</div>;

export const Empty = () => <div>ArchiveItemTag not found</div>;

export const Success = ({ archiveItemTag }) => {
  return <ArchiveItemTag archiveItemTag={archiveItemTag} />;
};
