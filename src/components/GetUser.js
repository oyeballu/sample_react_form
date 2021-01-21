import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import TextBoxLib from "./reuseable/TextBoxLib";
import axios from "axios";

const GetUser = () => {
    const [values, setValues] = useState([]);
    const searchField = {
        key: "Search by User Id",
        value: "UserId"
    };

    const handleSearch = () => {
        console.log("values: ", values.UserId)

        const apiurl = "abcurl?userid=" + values.UserId;
        try {
            axios.get(apiurl).then(
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
    }

    return (
        <Container>
            <TextBoxLib
                formText={searchField}
                values={values}
                setValues={setValues}
            />
            <Button variant="primary" size="sm" onClick={handleSearch}>Search</Button>
        </Container>
    );
};
export default GetUser;
