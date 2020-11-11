import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from "@redwoodjs/forms";

const LogEntryForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.logEntry?.id);
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
          name="timestamp"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Timestamp
        </Label>
        <TextField
          name="timestamp"
          defaultValue={props.logEntry?.timestamp}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="timestamp" className="rw-field-error" />

        <Label
          name="logLevel"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Log level
        </Label>
        <TextField
          name="logLevel"
          defaultValue={props.logEntry?.logLevel}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="logLevel" className="rw-field-error" />

        <Label
          name="source"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Source
        </Label>
        <TextField
          name="source"
          defaultValue={props.logEntry?.source}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="source" className="rw-field-error" />

        <Label
          name="logLine"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Log line
        </Label>
        <TextField
          name="logLine"
          defaultValue={props.logEntry?.logLine}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="logLine" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  );
};

export default LogEntryForm;
