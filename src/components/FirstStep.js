import React from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

export default function FirstStep({ handleNext, handleBack, activeStep, steps }) {
  const { firstName, lastName, email, gender } = [];

  const isError = () => {
    return false;
  };

  const returnError = () => {
    return true;
  };

  // Check if all values are not empty and if there are some errors
  // const isError = useCallback(
  //   () =>
  //     Object.keys({ firstName, lastName, email, gender }).some(
  //       (name) => (formValues[name].required && !formValues[name].value) || formValues[name].error
  //     ),
  //   [formValues, firstName, lastName, email, gender]
  // )

  const handleChange = () => {};
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            variant="standard"
            //margin={margin}
            fullWidth
            label="First Name"
            name="firstName"
            placeholder="Your first name"
            //value={"teste"}
            onChange={handleChange}
            //error={!!firstName.error}
            //helperText={firstName.error}
            //required={firstName.required}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            variant="standard"
            //margin={margin}
            fullWidth
            label="Last Name"
            name="lastName"
            placeholder="Your last name"
            value={"teste"}
            onChange={handleChange}
            //error={!!lastName.error}
            //helperText={lastName.error}
            //required={lastName.required}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            //variant={variant}
            //margin={margin}
            fullWidth
            label="Email"
            name="email"
            placeholder="Your email address"
            type="email"
            value={"teste"}
            onChange={handleChange}
            //error={!!email.error}
            //helperText={email.error}
            //required={email.required}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            //variant={variant}
            //margin={margin}
            fullWidth
            select
            SelectProps={{
              native: true,
            }}
            label="Gender"
            name="gender"
            value={"teste"}
            onChange={handleChange}
            // error={!!gender.error}
            // helperText={gender.error}
            // required={gender.required}
          >
            <option value=""> </option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </TextField>
        </Grid>
      </Grid>
      <Box sx={{ display: "flex", justifyContent: "flex-end", marginTop: 2 }}>
        <Button onClick={handleBack} sx={{ marginRight: 2 }} disabled={returnError()}>
          Retornar
        </Button>
        <Button variant="contained" onClick={!isError() ? handleNext : () => null} disabled={isError()}>
          {activeStep === steps.length - 1 ? "Confirmar e Salvar" : "Continuar"}
        </Button>
      </Box>
    </>
  );
}
