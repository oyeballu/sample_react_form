import React, { memo } from "react";
import { Form, Col } from "react-bootstrap";

const DropDownLib = ({ formText, values, setValues }) => {
  const set = (name) => {
      return ({ target: { value } }) => {
          setValues((oldValues) => ({ ...oldValues, [name]: value }));
      };
  };

  return (
    <Form.Group as={Col} controlId={`formGrid${formText.key}`}>
      <Form.Label>{formText.key}</Form.Label>
      <Form.Control
        as="select"
        size="sm"
        onChange={set(formText.value)}
      >
        {values.map((dropdownValue, dropdownIndex) => {
          return(
            <option>
              {dropdownValue}
            </option>
          )
        })}
      </Form.Control>
    </Form.Group>
  );
};
export default memo(DropDownLib);
