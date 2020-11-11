import {
  Form,
  FormError,
  FieldError,
  Label,
  NumberField,
  TextField,
  Submit,
} from "@redwoodjs/forms";

const Anniversary60ProfileForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.anniversary60Profile?.id);
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
          name="userProfileId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          User profile id
        </Label>
        <NumberField
          name="userProfileId"
          defaultValue={props.anniversary60Profile?.userProfileId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="userProfileId" className="rw-field-error" />

        <Label
          name="title"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Title
        </Label>
        <TextField
          name="title"
          defaultValue={props.anniversary60Profile?.title}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="title" className="rw-field-error" />

        <Label
          name="firstname"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Firstname
        </Label>
        <TextField
          name="firstname"
          defaultValue={props.anniversary60Profile?.firstname}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="firstname" className="rw-field-error" />

        <Label
          name="surname"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Surname
        </Label>
        <TextField
          name="surname"
          defaultValue={props.anniversary60Profile?.surname}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="surname" className="rw-field-error" />

        <Label
          name="prevNames"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Prev names
        </Label>
        <TextField
          name="prevNames"
          defaultValue={props.anniversary60Profile?.prevNames}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="prevNames" className="rw-field-error" />

        <Label
          name="address"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Address
        </Label>
        <TextField
          name="address"
          defaultValue={props.anniversary60Profile?.address}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="address" className="rw-field-error" />

        <Label
          name="email"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Email
        </Label>
        <TextField
          name="email"
          defaultValue={props.anniversary60Profile?.email}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="email" className="rw-field-error" />

        <Label
          name="phone"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Phone
        </Label>
        <TextField
          name="phone"
          defaultValue={props.anniversary60Profile?.phone}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="phone" className="rw-field-error" />

        <Label
          name="otherInfo"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Other info
        </Label>
        <TextField
          name="otherInfo"
          defaultValue={props.anniversary60Profile?.otherInfo}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="otherInfo" className="rw-field-error" />

        <Label
          name="wouldLikeTo"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Would like to
        </Label>
        <TextField
          name="wouldLikeTo"
          defaultValue={props.anniversary60Profile?.wouldLikeTo}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="wouldLikeTo" className="rw-field-error" />

        <Label
          name="dietary"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Dietary
        </Label>
        <TextField
          name="dietary"
          defaultValue={props.anniversary60Profile?.dietary}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="dietary" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  );
};

export default Anniversary60ProfileForm;
