import React from "react";
import "./style/Home.css";
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
