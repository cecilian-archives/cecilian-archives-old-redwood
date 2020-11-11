import CecilianTag from "src/components/Data/CecilianTag";

export const QUERY = gql`
  query FIND_CECILIAN_TAG_BY_ID($id: Int!) {
    cecilianTag: cecilianTag(id: $id) {
      id
      cecilianId
      tagId
      addedAt
      removedAt
    }
  }
`;

export const Loading = () => <div>Loading...</div>;

export const Empty = () => <div>CecilianTag not found</div>;

export const Success = ({ cecilianTag }) => {
  return <CecilianTag cecilianTag={cecilianTag} />;
};
