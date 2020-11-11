import YearsLayout from "src/layouts/Data/YearsLayout";
import EditYearCell from "src/components/Data/EditYearCell";

const EditYearPage = ({ id }) => {
  return (
    <YearsLayout>
      <EditYearCell id={id} />
    </YearsLayout>
  );
};

export default EditYearPage;
