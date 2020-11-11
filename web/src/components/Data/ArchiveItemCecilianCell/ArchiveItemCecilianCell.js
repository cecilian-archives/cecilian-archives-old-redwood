import ArchiveItemCecilian from "src/components/Data/ArchiveItemCecilian";

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

export const Loading = () => <div>Loading...</div>;

export const Empty = () => <div>ArchiveItemCecilian not found</div>;

export const Success = ({ archiveItemCecilian }) => {
  return <ArchiveItemCecilian archiveItemCecilian={archiveItemCecilian} />;
};
