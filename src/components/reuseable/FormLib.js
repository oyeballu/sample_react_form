import React, { memo, useEffect, useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import TextBoxLib from "./TextBoxLib";
import "./../../App.css";
import axios from "axios";
import DropDownLib from "./DropDownLib";

const FormLib = ({ formFields, initialData, dropdownData }) => {
  const [values, setValues] = useState(initialData);

  const handleSubmit = () => {
    console.log("values:",values)

    const apiurl = "abcurl";
    try {
      axios.post(apiurl, {
        "userid": values.UserId,
        "firstname": values.FirstName,
        "lastname": values.LastName,
        "experience": values.Experience,
        "gender": values.Gender
      }).then(
        function (response) {
          if (response != null && response != "")
            window.alert(response.data);
        },
        (err) => {
          window.alert("something went wrong!", err);
        }
      );
    } catch (error) {
      console.log("error occured : ", error);
    }
  };

  const handleReset = () => {
    setValues(initialData);
  };

  return (
    <Form>
      {formFields.map((formData, formIndex) => {
        return(
          formData.key != "Gender" ?
          <Form.Row key={formIndex}>
                  <TextBoxLib
                    formText={formData}
                    values={values}
                    setValues={setValues}
                  />
                </Form.Row>
                :
                <Form.Row key={formIndex}>
                  <DropDownLib
                      formText={formData}
                      values={dropdownData}
                      setValues={setValues}
                    />
                </Form.Row>
        )
      })}
            <Button variant="secondary" onClick={handleReset}>
              Reset
            </Button>
        {" "}
        <Button variant="primary" onClick={handleSubmit}>
          Add
        </Button>
    </Form>
  );
};
export default memo(FormLib);
