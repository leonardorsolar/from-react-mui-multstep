import React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";

export default function Confirm({ handleNext, handleBack, activeStep, steps }) {
  const { firstName, lastName, email, gender, date, city, phone } = [];

  const isError = () => {
    return false;
  };

  const returnError = () => {
    return false;
  };

  const handleSubmit = () => {
    // // Remove unwanted properties from formValue object
    // let form = {};
    // Object.keys(formValues).map((name) => {
    //   form = {
    //     ...form,
    //     [name]: formValues[name].value,
    //   };
    //   return form;
    // });
    // // Do whatever with the values
    // console.log(form);
    // // Show last component or success message
    handleNext();
  };

  return (
    <>
      <List disablePadding>
        <ListItem>
          <ListItemText primary="First Name" secondary={"leonardo" || "Not Provided"} />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText primary="Last Name" secondary={"leonardo" || "Not Provided"} />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText primary="Email Address" secondary={"leonardo" || "Not Provided"} />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText primary="Gender" secondary={"leonardo" || "Not Provided"} />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText primary="Date of birth" secondary={"leonardo" || "Not Provided"} />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText primary="City" secondary={"leonardo" || "Not Provided"} />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText primary="phone" secondary={"leonardo" || "Not Provided"} />
        </ListItem>
      </List>

      <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 3 }}>
        <Button sx={{ mr: 1 }} onClick={handleBack}>
          Back
        </Button>
        <Button variant="contained" color="success" onClick={handleSubmit}>
          Confirm & Continue
        </Button>
      </Box>
    </>
  );
}
