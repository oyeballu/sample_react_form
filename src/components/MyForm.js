import React from "react";
import { Container } from "react-bootstrap";
import { formFields, initialValue, dropdownData } from "./../properties/Constant";
import GetUser from "./GetUser";
import FormLib from "./reuseable/FormLib";

const MyForm = () => {

  return (
    <Container>
      <GetUser />
      <hr></hr>
      <FormLib formFields={formFields} initialData={initialValue} dropdownData={dropdownData} />
    </Container>
  );
};
export default MyForm;
