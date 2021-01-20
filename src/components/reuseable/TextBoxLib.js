import React, { memo } from "react";
import { Form, Col } from "react-bootstrap";

const TextBoxLib = ({ formText, values, setValues }) => {
  const set = (name) => {
    return ({ target: { value } }) => {
      setValues((oldValues) => ({ ...oldValues, [name]: value }));
    };
  };

  return (
    <Form.Group as={Col} controlId={`formGrid${formText.key}`}>
      <Form.Label>{formText.key}</Form.Label>
      <Form.Control
        size="sm"
        type="text"
        placeholder={formText.key}
        value={values[formText.value]}
        onChange={set(formText.value)}
      />
    </Form.Group>
  );
};
export default memo(TextBoxLib);
