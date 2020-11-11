import { useMutation, useFlash } from "@redwoodjs/web";
import { navigate, routes } from "@redwoodjs/router";
import CollectionItemForm from "src/components/Data/CollectionItemForm";

import { QUERY } from "src/components/Data/CollectionItemsCell";

const CREATE_COLLECTION_ITEM_MUTATION = gql`
  mutation CreateCollectionItemMutation($input: CreateCollectionItemInput!) {
    createCollectionItem(input: $input) {
      id
    }
  }
`;

const NewCollectionItem = () => {
  const { addMessage } = useFlash();
  const [createCollectionItem, { loading, error }] = useMutation(
    CREATE_COLLECTION_ITEM_MUTATION,
    {
      onCompleted: () => {
        navigate(routes.adminDataCollectionItems());
        addMessage("CollectionItem created.", { classes: "rw-flash-success" });
      },
      // This refetches the query on the list page. Read more about other ways to
      // update the cache over here:
      // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
      refetchQueries: [{ query: QUERY }],
      awaitRefetchQueries: true,
    }
  );

  const onSave = (input) => {
    const castInput = Object.assign(input, {
      itemId: parseInt(input.itemId),
      collectionId: parseInt(input.collectionId),
      addedById: parseInt(input.addedById),
    });
    createCollectionItem({ variables: { input: castInput } });
  };

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New CollectionItem</h2>
      </header>
      <div className="rw-segment-main">
        <CollectionItemForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  );
};

export default NewCollectionItem;
