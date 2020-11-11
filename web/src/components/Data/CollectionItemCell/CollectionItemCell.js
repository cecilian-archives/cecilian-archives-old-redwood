import CollectionItem from "src/components/Data/CollectionItem";

export const QUERY = gql`
  query FIND_COLLECTION_ITEM_BY_ID($id: Int!) {
    collectionItem: collectionItem(id: $id) {
      id
      itemId
      collectionId
      itemIndex
      addedById
      addedAt
      updatedAt
      removedAt
    }
  }
`;

export const Loading = () => <div>Loading...</div>;

export const Empty = () => <div>CollectionItem not found</div>;

export const Success = ({ collectionItem }) => {
  return <CollectionItem collectionItem={collectionItem} />;
};
