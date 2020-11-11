import Anniversary60ProfilesLayout from "src/layouts/Data/Anniversary60ProfilesLayout";
import EditAnniversary60ProfileCell from "src/components/Data/EditAnniversary60ProfileCell";

const EditAnniversary60ProfilePage = ({ id }) => {
  return (
    <Anniversary60ProfilesLayout>
      <EditAnniversary60ProfileCell id={id} />
    </Anniversary60ProfilesLayout>
  );
};

export default EditAnniversary60ProfilePage;
