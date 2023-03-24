import { useState } from "react";
import { Stepper, Step, StepLabel, TextField, Select, MenuItem, Button, Box } from "@mui/material";
import Success from "./Success";
import Typography from "@mui/material/Typography";
import Confirm from "./Confirm";
import FirstStep from "./FirstStep";
import SecondStep from "./SecondStep";

export default function MultiStepForm() {
  const [activeStep, setActiveStep] = useState(0);
  const [date, setDate] = useState("");
  const [text, setText] = useState("");
  const [selection, setSelection] = useState("");

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleSelectionChange = (event) => {
    setSelection(event.target.value);
  };

  const steps = ["Step 1", "Step 2", "Step 3"];

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return <FirstStep handleNext={handleNext} handleBack={handleBack} activeStep={activeStep} steps={steps} />;
      case 1:
        return <SecondStep handleNext={handleNext} handleBack={handleBack} activeStep={activeStep} steps={steps} />;
      case 2:
        return <Confirm handleNext={handleNext} handleBack={handleBack} activeStep={activeStep} steps={steps} />;
      default:
        return "Unknown step";
    }
  };

  return (
    <>
      <Box sx={{ my: 5 }}>
        <Typography variant="h4" align="center">
          Multi Step Form
        </Typography>
        <Typography variant="subtitle2" align="center" sx={{ mt: 2 }}>
          React Material UI multi step form with basic form validation logic.
        </Typography>
      </Box>
      <Stepper activeStep={activeStep} sx={{ py: 3 }}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Box sx={{ width: "100%", maxWidth: 900 }}>
        {activeStep === steps.length ? (
          <Success />
        ) : (
          <>
            {getStepContent(activeStep)}
            {/* <Box sx={{ display: "flex", justifyContent: "flex-end", marginTop: 2 }}>
              <Button onClick={handleBack} sx={{ marginRight: 2 }}>
                Retornar
              </Button>
              <Button variant="contained" onClick={!isError() ? handleNext : () => null} disabled={isError()}>
                {activeStep === steps.length - 1 ? "Confirmar e Salvar" : "Continuar"}
              </Button>
            </Box> */}
          </>
        )}
      </Box>
    </>
  );
}
