import YearsLayout from "src/layouts/Data/YearsLayout";
import YearCell from "src/components/Data/YearCell";

const YearPage = ({ id }) => {
  return (
    <YearsLayout>
      <YearCell id={id} />
    </YearsLayout>
  );
};

export default YearPage;
