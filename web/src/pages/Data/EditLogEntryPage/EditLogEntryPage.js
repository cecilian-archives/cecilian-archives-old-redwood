import LogEntriesLayout from "src/layouts/Data/LogEntriesLayout";
import EditLogEntryCell from "src/components/Data/EditLogEntryCell";

const EditLogEntryPage = ({ id }) => {
  return (
    <LogEntriesLayout>
      <EditLogEntryCell id={id} />
    </LogEntriesLayout>
  );
};

export default EditLogEntryPage;
