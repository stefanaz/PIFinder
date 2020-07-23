import React from "react";
import "../App.css";

import AppBar from "./layout/AppBar";
import Body from "./layout/Body";

import store from "../store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <AppBar />
        <Body />
      </div>
    </Provider>
  );
}

export default App;
