import {
  Form,
  FormError,
  FieldError,
  Label,
  NumberField,
  TextField,
  Submit,
} from "@redwoodjs/forms";

const ArchiveItemCecilianForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.archiveItemCecilian?.id);
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
          defaultValue={props.archiveItemCecilian?.cecilianId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="cecilianId" className="rw-field-error" />

        <Label
          name="itemId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Item id
        </Label>
        <NumberField
          name="itemId"
          defaultValue={props.archiveItemCecilian?.itemId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="itemId" className="rw-field-error" />

        <Label
          name="addedAt"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Added at
        </Label>
        <TextField
          name="addedAt"
          defaultValue={props.archiveItemCecilian?.addedAt}
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
          defaultValue={props.archiveItemCecilian?.removedAt}
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

export default ArchiveItemCecilianForm;
