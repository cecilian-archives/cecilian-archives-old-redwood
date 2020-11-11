import ArchiveItemFile from "src/components/Data/ArchiveItemFile";

export const QUERY = gql`
  query FIND_ARCHIVE_ITEM_FILE_BY_ID($id: Int!) {
    archiveItemFile: archiveItemFile(id: $id) {
      id
      fileId
      itemId
      addedAt
      removedAt
    }
  }
`;

export const Loading = () => <div>Loading...</div>;

export const Empty = () => <div>ArchiveItemFile not found</div>;

export const Success = ({ archiveItemFile }) => {
  return <ArchiveItemFile archiveItemFile={archiveItemFile} />;
};
