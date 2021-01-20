import React from "react";
import { Container } from "react-bootstrap";
import { formFields } from "./../properties/Constant";
import FormLib from "./reuseable/FormLib";

const MyForm = () => {
    const initialValue = {
        FirstName:"",
        LastName: "",
        Experience:"",
        Gender:""
    }
    const dropdownData = [
        "Male", "Female", "Don't want to disclose"
    ]

  return (
      <Container>
        <FormLib formFields={formFields} initialData={initialValue} dropdownData={dropdownData} />
      </Container>
  );
};
export default MyForm;
