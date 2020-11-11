import { useMutation, useFlash } from "@redwoodjs/web";
import { navigate, routes } from "@redwoodjs/router";
import CollectionItemForm from "src/components/Data/CollectionItemForm";

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
const UPDATE_COLLECTION_ITEM_MUTATION = gql`
  mutation UpdateCollectionItemMutation(
    $id: Int!
    $input: UpdateCollectionItemInput!
  ) {
    updateCollectionItem(id: $id, input: $input) {
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

export const Success = ({ collectionItem }) => {
  const { addMessage } = useFlash();
  const [updateCollectionItem, { loading, error }] = useMutation(
    UPDATE_COLLECTION_ITEM_MUTATION,
    {
      onCompleted: () => {
        navigate(routes.adminDataCollectionItems());
        addMessage("CollectionItem updated.", { classes: "rw-flash-success" });
      },
    }
  );

  const onSave = (input, id) => {
    const castInput = Object.assign(input, {
      itemId: parseInt(input.itemId),
      collectionId: parseInt(input.collectionId),
      addedById: parseInt(input.addedById),
    });
    updateCollectionItem({ variables: { id, input: castInput } });
  };

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit CollectionItem {collectionItem.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <CollectionItemForm
          collectionItem={collectionItem}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  );
};
