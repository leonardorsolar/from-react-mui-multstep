import React from "react";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MultiStepForm from "./components/MultiStepForm";

function App() {
  return (
    <div>
      <Header />
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          {/* <StepForm /> */}
          <MultiStepForm />
        </Paper>
        <Footer />
      </Container>
    </div>
  );
}

export default App;
