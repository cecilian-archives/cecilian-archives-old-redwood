import { useState } from "react";
import tw from "twin.macro";
import { Form, Label, TextField } from "@redwoodjs/forms";
import CecilianTagInput from "src/components/CecilianTagInput/CecilianTagInput";
import TagInput from "src/components/shared/TagInput/TagInput";
import Button from "src/components/shared/Button/Button";

const ProfileEditor = ({ profile }) => {
  const [otherNames, setOtherNames] = useState(
    profile.otherNames ? profile.otherNames.split("|") : []
  );
  const [otherNamesInput, setOtherNamesInput] = useState("");

  const onSubmit = (data) => {
    console.info(data);
    console.info(otherNames.join("|"));
  };

  return (
    <FormGroup validation={{ mode: "onBlur" }} onSubmit={onSubmit}>
      <GroupCol>
        <GroupTitle>Archive Tag</GroupTitle>
        <GroupBlurb>
          Items in the archive that are related to you can be tagged with your
          name
        </GroupBlurb>
      </GroupCol>
      <CardCol>
        <Fields>
          <FieldLabel>Your Archive Tag</FieldLabel>
          <CecilianTagInput single allowCreation />
          <FieldHelp>
            If a tag exists for your name, select it here to link it to your
            profile. If you don't have an archive tag yet, you'll be prompted to
            create one.
          </FieldHelp>
        </Fields>
        <SaveBar>
          <Button type="primary">Save</Button>
        </SaveBar>
      </CardCol>
      <GroupCol>
        <GroupTitle>Your Names</GroupTitle>
        <GroupBlurb>
          Your name now, as well as other names you wish to share to help people
          find you
        </GroupBlurb>
      </GroupCol>
      <CardCol>
        <Fields>
          <FieldLabel>Title</FieldLabel>
          <TextInput
            name="title"
            placeholder="Mx/Ms/Mr etc."
            defaultValue={profile.title}
          />
          <FieldLabel>Forename(s)</FieldLabel>
          <TextInput
            name="firstNames"
            placeholder="Jean"
            defaultValue={profile.firstNames}
          />
          <FieldLabel>Surname</FieldLabel>
          <TextInput
            name="lastNames"
            placeholder="Valjean"
            defaultValue={profile.lastNames}
          />
          <FieldLabel>Other Names</FieldLabel>
          <TagInput
            tagList={otherNames}
            setTagList={setOtherNames}
            inputValue={otherNamesInput}
            setInputValue={setOtherNamesInput}
            name="otherNames"
            placeholder="Prisoner 24601"
            showOptions={false}
            freeTagging={true}
          />
          <FieldHelp>
            Names before marriage, nicknames, etc. Add as many as you like, in
            full. Press Enter after each one.
          </FieldHelp>
        </Fields>
        <SaveBar>
          <Button type="primary">Save</Button>
        </SaveBar>
      </CardCol>
      <GroupCol>
        <GroupTitle>Tags</GroupTitle>
        <GroupBlurb>Record your involvement in the Society</GroupBlurb>
      </GroupCol>
      <CardCol>
        <Fields>
          <FieldLabel>Shows</FieldLabel>
          <CecilianTagInput />
          <FieldHelp>Search for shows by name or year</FieldHelp>
          <FieldLabel>Years</FieldLabel>
          <CecilianTagInput />
          <FieldHelp>Search for years (AGM to AGM)</FieldHelp>
          <FieldLabel>Roles</FieldLabel>
          <CecilianTagInput />
          <FieldHelp>Search for society or performance roles</FieldHelp>
        </Fields>
        <SaveBar>
          <Button type="primary">Save</Button>
        </SaveBar>
      </CardCol>
      <GroupCol>
        <GroupTitle>Contact Details</GroupTitle>
        <GroupBlurb>Let the Society keep in touch!</GroupBlurb>
      </GroupCol>
      <CardCol>
        <Fields>
          <FieldLabel>Contact</FieldLabel>
          <TextInput name="contact" placeholder="Example" />
          <FieldHelp>Needs to be multiple, with an add button</FieldHelp>
        </Fields>
        <SaveBar>
          <Button type="primary">Save</Button>
        </SaveBar>
      </CardCol>
      <GroupCol>
        <GroupTitle>Access Key</GroupTitle>
        <GroupBlurb>Allow access to other Cecilians</GroupBlurb>
      </GroupCol>
      <CardCol>
        <Fields>
          <FieldLabel>Your Access Key</FieldLabel>
          <TextInput name="accessKey" placeholder="Any word or phrase" />
          <FieldHelp>
            You can only have one access key at a time. Editing this will
            invalidate any previous keys.
          </FieldHelp>
        </Fields>
        <SaveBar>
          <Button type="outline">Remove</Button>
          <Button type="primary">Save</Button>
        </SaveBar>
      </CardCol>
    </FormGroup>
  );
};

const FormGroup = tw(Form)`
  grid
  grid-cols-3
  md:grid-cols-1
  grid-flow-row
  auto-rows-auto
  gap-12
  md:gap-y-4
  w-full
  max-w-5xl
  mx-auto
  my-2
`;

const GroupCol = tw.div`
  flex
  flex-col
  justify-start
  items-start
  col-span-1
`;

const GroupTitle = tw.h3`
  font-body
  text-xl
`;

const GroupBlurb = tw.span`
  font-body
  text-base
  max-w-prose
  text-grey-dark
`;

const CardCol = tw.div`
  flex
  flex-col
  justify-start
  items-start
  col-span-2
  md:mb-4
  bg-white
  border
  border-grey
  rounded-lg
  shadow-lg
`;

const Fields = tw.div`
  flex
  flex-col
  justify-start
  items-start
  w-full
  px-5
  pt-3
  pb-5
`;

const FieldLabel = tw(Label)`
  font-body
  text-base
  text-grey-darker
  first:mt-1
  mt-4
  mb-1
`;

const TextInput = tw(TextField)`
  w-full
  font-body
  rounded
  border-grey-dark
  focus:outline-none
  focus:border-transparent
  focus:ring-2
  focus:ring-deepBlue
`;

const FieldHelp = tw.span`
  font-body
  text-base
  max-w-prose
  text-grey
  mt-1
`;

const SaveBar = tw.div`
  w-full
  flex
  justify-end
  items-center
  px-5
  py-4
  space-x-3
  bg-grey-lighter
  rounded-lg
`;

export default ProfileEditor;
