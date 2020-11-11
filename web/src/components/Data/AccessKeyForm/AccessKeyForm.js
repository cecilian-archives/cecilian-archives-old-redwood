import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  NumberField,
  Submit,
} from "@redwoodjs/forms";

const AccessKeyForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.accessKey?.id);
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
          name="key"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Key
        </Label>
        <TextField
          name="key"
          defaultValue={props.accessKey?.key}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="key" className="rw-field-error" />

        <Label
          name="ownerId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Owner id
        </Label>
        <NumberField
          name="ownerId"
          defaultValue={props.accessKey?.ownerId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="ownerId" className="rw-field-error" />

        <Label
          name="removedAt"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Removed at
        </Label>
        <TextField
          name="removedAt"
          defaultValue={props.accessKey?.removedAt}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="removedAt" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  );
};

export default AccessKeyForm;
