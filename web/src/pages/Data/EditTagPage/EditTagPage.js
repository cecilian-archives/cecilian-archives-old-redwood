import TagsLayout from "src/layouts/Data/TagsLayout";
import EditTagCell from "src/components/Data/EditTagCell";

const EditTagPage = ({ id }) => {
  return (
    <TagsLayout>
      <EditTagCell id={id} />
    </TagsLayout>
  );
};

export default EditTagPage;
