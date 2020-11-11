import LogEntriesLayout from "src/layouts/Data/LogEntriesLayout";
import LogEntryCell from "src/components/Data/LogEntryCell";

const LogEntryPage = ({ id }) => {
  return (
    <LogEntriesLayout>
      <LogEntryCell id={id} />
    </LogEntriesLayout>
  );
};

export default LogEntryPage;
