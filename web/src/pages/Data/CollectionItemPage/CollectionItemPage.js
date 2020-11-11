import CollectionItemsLayout from "src/layouts/Data/CollectionItemsLayout";
import CollectionItemCell from "src/components/Data/CollectionItemCell";

const CollectionItemPage = ({ id }) => {
  return (
    <CollectionItemsLayout>
      <CollectionItemCell id={id} />
    </CollectionItemsLayout>
  );
};

export default CollectionItemPage;
