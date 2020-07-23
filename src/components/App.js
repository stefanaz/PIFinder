import React from "react";
import "../App.css";
import { Button, Container } from "@material-ui/core";
import AppBar from "./layout/AppBar";
import MainSvg from "./svg/MainSvg";

function App() {
  return (
    <div className='App'>
      <AppBar />
      <Container maxWidth='lg'>
        <div style={{ backgroundColor: "lightgrey", height: "100vh" }}>
          <MainSvg></MainSvg>
          <Button variant='contained' color='primary'>
            Primary
          </Button>
          <svg></svg>
        </div>
      </Container>
    </div>
  );
}

export default App;
