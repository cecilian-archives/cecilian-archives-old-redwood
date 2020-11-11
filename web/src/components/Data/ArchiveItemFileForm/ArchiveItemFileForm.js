import {
  Form,
  FormError,
  FieldError,
  Label,
  NumberField,
  TextField,
  Submit,
} from "@redwoodjs/forms";

const ArchiveItemFileForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.archiveItemFile?.id);
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
          name="fileId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          File id
        </Label>
        <NumberField
          name="fileId"
          defaultValue={props.archiveItemFile?.fileId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="fileId" className="rw-field-error" />

        <Label
          name="itemId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Item id
        </Label>
        <NumberField
          name="itemId"
          defaultValue={props.archiveItemFile?.itemId}
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
          defaultValue={props.archiveItemFile?.addedAt}
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
          defaultValue={props.archiveItemFile?.removedAt}
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

export default ArchiveItemFileForm;
