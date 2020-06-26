import React from "react";
import "./App.css";
import Menu from "./components/Menu";
import Footer from "./components/Footer";

function App(props) {
  return (
    <>
      <Menu />
      {props.children}
      <Footer />
    </>
  );
}

export default App;
