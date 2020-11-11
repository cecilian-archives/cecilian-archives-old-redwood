import {
  Form,
  FormError,
  FieldError,
  Label,
  NumberField,
  TextField,
  Submit,
} from "@redwoodjs/forms";

const CecilianTagForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.cecilianTag?.id);
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
          name="cecilianId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Cecilian id
        </Label>
        <NumberField
          name="cecilianId"
          defaultValue={props.cecilianTag?.cecilianId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="cecilianId" className="rw-field-error" />

        <Label
          name="tagId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Tag id
        </Label>
        <NumberField
          name="tagId"
          defaultValue={props.cecilianTag?.tagId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="tagId" className="rw-field-error" />

        <Label
          name="addedAt"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Added at
        </Label>
        <TextField
          name="addedAt"
          defaultValue={props.cecilianTag?.addedAt}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="addedAt" className="rw-field-error" />

        <Label
          name="removedAt"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Removed at
        </Label>
        <TextField
          name="removedAt"
          defaultValue={props.cecilianTag?.removedAt}
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

export default CecilianTagForm;
