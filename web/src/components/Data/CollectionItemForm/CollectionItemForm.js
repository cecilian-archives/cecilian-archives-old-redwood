import {
  Form,
  FormError,
  FieldError,
  Label,
  NumberField,
  TextField,
  Submit,
} from "@redwoodjs/forms";

const CollectionItemForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.collectionItem?.id);
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
          name="itemId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Item id
        </Label>
        <NumberField
          name="itemId"
          defaultValue={props.collectionItem?.itemId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="itemId" className="rw-field-error" />

        <Label
          name="collectionId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Collection id
        </Label>
        <NumberField
          name="collectionId"
          defaultValue={props.collectionItem?.collectionId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="collectionId" className="rw-field-error" />

        <Label
          name="itemIndex"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Item index
        </Label>
        <TextField
          name="itemIndex"
          defaultValue={props.collectionItem?.itemIndex}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="itemIndex" className="rw-field-error" />

        <Label
          name="addedById"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Added by id
        </Label>
        <NumberField
          name="addedById"
          defaultValue={props.collectionItem?.addedById}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="addedById" className="rw-field-error" />

        <Label
          name="addedAt"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Added at
        </Label>
        <TextField
          name="addedAt"
          defaultValue={props.collectionItem?.addedAt}
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
          defaultValue={props.collectionItem?.removedAt}
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

export default CollectionItemForm;
