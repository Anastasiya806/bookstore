import React from "react";
import "./App.css";
import Header from "./header/Header";
import Content from "./main/Content";
import Footer from "./footer/Footer";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
