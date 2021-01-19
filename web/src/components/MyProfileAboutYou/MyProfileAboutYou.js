import { useState } from "react";
import { Form } from "@redwoodjs/forms";
import { useForm } from "react-hook-form";
import CecilianTagInput from "src/components/CecilianTagInput/CecilianTagInput";

const MyProfileAboutYou = () => {
  const formMethods = useForm();
  const [otherNames, setOtherNames] = useState([]);

  const onSubmit = (data) => {
    console.info(data);
    console.info(otherNames.join("|"));
    formMethods.reset();
  };

  return (
    <Form formMethods={formMethods} onSubmit={onSubmit}>
      <FormGroup
        title={<h3>Archive Tag</h3>}
        description="Items in the archive that are related to you can be tagged with your name."
      >
        <div
          label="Your Archive Tag"
          helpText="If a tag exists for your name, select it here to link it to your profile. If you don't have an archive tag yet, create one."
        >
          <CecilianTagInput single allowCreation />
        </div>
      </FormGroup>
      <FormGroup
        title={<h3>Your Names</h3>}
        description="Your name now, as well as other names you have been known by in the past"
      >
        <div label="Title">
          <div
            name="title"
            placeholder="e.g. Rev"
            inputRef={formMethods.register}
          />
        </div>
        <div label="Forename(s)">
          <div
            name="firstNames"
            placeholder="e.g. Jean"
            inputRef={formMethods.register}
          />
        </div>
        <div label="Surname">
          <div
            name="lastNames"
            placeholder="e.g. Valjean"
            inputRef={formMethods.register}
          />
        </div>
        <div
          label="Other Names"
          helpText="Maiden name, nicknames, etc. Add as many as necessary, ideally in full. Press Enter after each one."
        >
          <div
            noSuggestions
            placeholder="Prisoner 24601"
            isClearable={false}
            selectedOptions={otherNames}
            onCreateOption={(value) =>
              setOtherNames((current) => [...current, { label: value }])
            }
            onChange={(values) => setOtherNames(values)}
          />
        </div>
      </FormGroup>
      <FormGroup
        title={<h3>Tags</h3>}
        description="Years and shows you were involved in, and roles you played or filled"
      >
        <div label="Shows" helpText="Show help text">
          <span>Show tag input here</span>
        </div>
        <div label="Years" helpText="Year help text">
          <span>Year tag input here</span>
        </div>
        <div label="Roles" helpText="Role help text">
          <span>Role tag input here</span>
        </div>
      </FormGroup>
    </Form>
  );
};

export default MyProfileAboutYou;
