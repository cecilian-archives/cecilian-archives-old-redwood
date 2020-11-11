import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  NumberField,
  Submit,
} from "@redwoodjs/forms";

const ArchiveCollectionForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.archiveCollection?.id);
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
          defaultValue={props.archiveCollection?.slug}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="slug" className="rw-field-error" />

        <Label
          name="type"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Type
        </Label>
        <TextField
          name="type"
          defaultValue={props.archiveCollection?.type}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="type" className="rw-field-error" />

        <Label
          name="name"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Name
        </Label>
        <TextField
          name="name"
          defaultValue={props.archiveCollection?.name}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="name" className="rw-field-error" />

        <Label
          name="description"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Description
        </Label>
        <TextField
          name="description"
          defaultValue={props.archiveCollection?.description}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="description" className="rw-field-error" />

        <Label
          name="physicalLocation"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Physical location
        </Label>
        <TextField
          name="physicalLocation"
          defaultValue={props.archiveCollection?.physicalLocation}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="physicalLocation" className="rw-field-error" />

        <Label
          name="ownerId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Owner id
        </Label>
        <NumberField
          name="ownerId"
          defaultValue={props.archiveCollection?.ownerId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="ownerId" className="rw-field-error" />

        <Label
          name="viewPerms"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          View perms
        </Label>
        <TextField
          name="viewPerms"
          defaultValue={props.archiveCollection?.viewPerms}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="viewPerms" className="rw-field-error" />

        <Label
          name="editPerms"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Edit perms
        </Label>
        <TextField
          name="editPerms"
          defaultValue={props.archiveCollection?.editPerms}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="editPerms" className="rw-field-error" />

        <Label
          name="createdById"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Created by id
        </Label>
        <NumberField
          name="createdById"
          defaultValue={props.archiveCollection?.createdById}
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
          defaultValue={props.archiveCollection?.updatedById}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="updatedById" className="rw-field-error" />

        <Label
          name="deletedAt"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Deleted at
        </Label>
        <TextField
          name="deletedAt"
          defaultValue={props.archiveCollection?.deletedAt}
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

export default ArchiveCollectionForm;
