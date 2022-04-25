import React from "react";
import "./stylesheets/index.scss";
import Title from "./components/Title";
import Form from "./components/Form";

function App() {
  return (
    <header className="hero">
      <Title />
      <Form />
    </header>
  );
}

export default App;
