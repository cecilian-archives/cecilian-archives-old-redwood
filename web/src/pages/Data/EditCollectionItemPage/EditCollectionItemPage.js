import CollectionItemsLayout from "src/layouts/Data/CollectionItemsLayout";
import EditCollectionItemCell from "src/components/Data/EditCollectionItemCell";

const EditCollectionItemPage = ({ id }) => {
  return (
    <CollectionItemsLayout>
      <EditCollectionItemCell id={id} />
    </CollectionItemsLayout>
  );
};

export default EditCollectionItemPage;
