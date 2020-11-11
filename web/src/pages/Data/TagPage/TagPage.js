import TagsLayout from "src/layouts/Data/TagsLayout";
import TagCell from "src/components/Data/TagCell";

const TagPage = ({ id }) => {
  return (
    <TagsLayout>
      <TagCell id={id} />
    </TagsLayout>
  );
};

export default TagPage;
