import { EuiFormRow, EuiDescribedFormGroup } from "@elastic/eui";
import CecilianTagInput from "src/components/CecilianTagInput/CecilianTagInput";

const MyProfileArchiveTag = () => {
  return (
    <EuiDescribedFormGroup
      title={<h3>Archive Tag</h3>}
      description="Items in the archive that are related to you can be tagged with your name."
    >
      <EuiFormRow
        label="Your Archive Tag"
        helpText="If a tag exists for your name, select it here to link it to your profile. If you don't have an archive tag yet, create one."
      >
        <CecilianTagInput single allowCreation />
      </EuiFormRow>
    </EuiDescribedFormGroup>
  );
};

export default MyProfileArchiveTag;