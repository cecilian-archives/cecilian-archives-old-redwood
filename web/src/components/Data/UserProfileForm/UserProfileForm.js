import {
  Form,
  FormError,
  FieldError,
  Label,
  NumberField,
  TextField,
  Submit,
} from "@redwoodjs/forms";

const UserProfileForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.userProfile?.id);
  };

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="userId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          User id
        </Label>
        <NumberField
          name="userId"
          defaultValue={props.userProfile?.userId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="userId" className="rw-field-error" />

        <Label
          name="cecilianId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Cecilian id
        </Label>
        <NumberField
          name="cecilianId"
          defaultValue={props.userProfile?.cecilianId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="cecilianId" className="rw-field-error" />

        <Label
          name="title"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Title
        </Label>
        <TextField
          name="title"
          defaultValue={props.userProfile?.title}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="title" className="rw-field-error" />

        <Label
          name="firstNames"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          First names
        </Label>
        <TextField
          name="firstNames"
          defaultValue={props.userProfile?.firstNames}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="firstNames" className="rw-field-error" />

        <Label
          name="lastNames"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Last names
        </Label>
        <TextField
          name="lastNames"
          defaultValue={props.userProfile?.lastNames}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="lastNames" className="rw-field-error" />

        <Label
          name="otherNames"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Other names
        </Label>
        <TextField
          name="otherNames"
          defaultValue={props.userProfile?.otherNames}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="otherNames" className="rw-field-error" />

        <Label
          name="visibility"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Visibility
        </Label>
        <TextField
          name="visibility"
          defaultValue={props.userProfile?.visibility}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="visibility" className="rw-field-error" />

        <Label
          name="deletedAt"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Deleted at
        </Label>
        <TextField
          name="deletedAt"
          defaultValue={props.userProfile?.deletedAt}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="deletedAt" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  );
};

export default UserProfileForm;
