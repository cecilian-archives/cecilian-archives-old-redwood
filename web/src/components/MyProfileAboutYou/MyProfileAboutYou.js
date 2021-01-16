import { Form } from "@redwoodjs/forms";
import { EuiFormRow, EuiDescribedFormGroup } from "@elastic/eui";
import CecilianTagInput from "src/components/CecilianTagInput/CecilianTagInput";

const MyProfileAboutYou = () => {
  return (
    <Form>
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
      <EuiDescribedFormGroup
        title={<h3>Your Names</h3>}
        description="Your name now, as well as other names you have been known by"
      >
        <EuiFormRow
          label="Your Name"
          helpText="Your name right now - forename and surname please"
        >
          <span>Name input here</span>
        </EuiFormRow>
      </EuiDescribedFormGroup>
      <EuiDescribedFormGroup
        title={<h3>Tags</h3>}
        description="Years and shows you were involved in, and roles you played or filled"
      >
        <EuiFormRow label="Shows" helpText="Show help text">
          <span>Show tag input here</span>
        </EuiFormRow>
        <EuiFormRow label="Years" helpText="Year help text">
          <span>Year tag input here</span>
        </EuiFormRow>
        <EuiFormRow label="Roles" helpText="Role help text">
          <span>Role tag input here</span>
        </EuiFormRow>
      </EuiDescribedFormGroup>
    </Form>
  );
};

export default MyProfileAboutYou;
