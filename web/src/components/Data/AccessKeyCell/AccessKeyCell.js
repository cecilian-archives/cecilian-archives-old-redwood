import AccessKey from "src/components/Data/AccessKey";

export const QUERY = gql`
  query FIND_ACCESS_KEY_BY_ID($id: Int!) {
    accessKey: accessKey(id: $id) {
      id
      key
      ownerId
      createdAt
      updatedAt
      removedAt
    }
  }
`;

export const Loading = () => <div>Loading...</div>;

export const Empty = () => <div>AccessKey not found</div>;

export const Success = ({ accessKey }) => {
  return <AccessKey accessKey={accessKey} />;
};
