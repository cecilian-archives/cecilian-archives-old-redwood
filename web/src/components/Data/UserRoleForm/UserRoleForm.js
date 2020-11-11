import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  NumberField,
  Submit,
} from "@redwoodjs/forms";

const UserRoleForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.userRole?.id);
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
          name="roleName"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Role name
        </Label>
        <TextField
          name="roleName"
          defaultValue={props.userRole?.roleName}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="roleName" className="rw-field-error" />

        <Label
          name="accessLevel"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Access level
        </Label>
        <NumberField
          name="accessLevel"
          defaultValue={props.userRole?.accessLevel}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="accessLevel" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  );
};

export default UserRoleForm;
