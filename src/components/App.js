import React from "react";
import "../App.css";
import { Button, Container } from "@material-ui/core";
import AppBar from "./layout/AppBar";

function App() {
  return (
    <div className='App'>
      <AppBar />
      <Container maxWidth='lg'>
        <div style={{ backgroundColor: "lightgrey", height: "100vh" }}>
          <Button variant='contained' color='primary'>
            Primary
          </Button>
        </div>
      </Container>
    </div>
  );
}

export default App;
