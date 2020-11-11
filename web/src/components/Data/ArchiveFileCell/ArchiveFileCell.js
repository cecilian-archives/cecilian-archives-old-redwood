import ArchiveFile from "src/components/Data/ArchiveFile";

export const QUERY = gql`
  query FIND_ARCHIVE_FILE_BY_ID($id: Int!) {
    archiveFile: archiveFile(id: $id) {
      id
      slug
      kind
      name
      notes
      url
      createdAt
      updatedAt
      deletedAt
      deletedById
    }
  }
`;

export const Loading = () => <div>Loading...</div>;

export const Empty = () => <div>ArchiveFile not found</div>;

export const Success = ({ archiveFile }) => {
  return <ArchiveFile archiveFile={archiveFile} />;
};
