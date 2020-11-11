import Anniversary60ProfilesLayout from "src/layouts/Data/Anniversary60ProfilesLayout";
import Anniversary60ProfileCell from "src/components/Data/Anniversary60ProfileCell";

const Anniversary60ProfilePage = ({ id }) => {
  return (
    <Anniversary60ProfilesLayout>
      <Anniversary60ProfileCell id={id} />
    </Anniversary60ProfilesLayout>
  );
};

export default Anniversary60ProfilePage;
