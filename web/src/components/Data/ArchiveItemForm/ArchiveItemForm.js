import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  NumberField,
  Submit,
} from "@redwoodjs/forms";

const ArchiveItemForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.archiveItem?.id);
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
          name="slug"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Slug
        </Label>
        <TextField
          name="slug"
          defaultValue={props.archiveItem?.slug}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="slug" className="rw-field-error" />

        <Label
          name="archiveRef"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Archive ref
        </Label>
        <TextField
          name="archiveRef"
          defaultValue={props.archiveItem?.archiveRef}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="archiveRef" className="rw-field-error" />

        <Label
          name="type"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Type
        </Label>
        <TextField
          name="type"
          defaultValue={props.archiveItem?.type}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="type" className="rw-field-error" />

        <Label
          name="associatedDate"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Associated date
        </Label>
        <TextField
          name="associatedDate"
          defaultValue={props.archiveItem?.associatedDate}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="associatedDate" className="rw-field-error" />

        <Label
          name="notes"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Notes
        </Label>
        <TextField
          name="notes"
          defaultValue={props.archiveItem?.notes}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="notes" className="rw-field-error" />

        <Label
          name="authorId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Author id
        </Label>
        <NumberField
          name="authorId"
          defaultValue={props.archiveItem?.authorId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="authorId" className="rw-field-error" />

        <Label
          name="deletedAt"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Deleted at
        </Label>
        <TextField
          name="deletedAt"
          defaultValue={props.archiveItem?.deletedAt}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="deletedAt" className="rw-field-error" />

        <Label
          name="createdById"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Created by id
        </Label>
        <NumberField
          name="createdById"
          defaultValue={props.archiveItem?.createdById}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="createdById" className="rw-field-error" />

        <Label
          name="updatedById"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Updated by id
        </Label>
        <NumberField
          name="updatedById"
          defaultValue={props.archiveItem?.updatedById}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="updatedById" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  );
};

export default ArchiveItemForm;
