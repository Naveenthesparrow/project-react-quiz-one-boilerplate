import React from "react";
import "./App.css";
import Result from "./components/result";
import Quiz from "./components/quiz";
import Home from "./components/home";
function App() {
  return (
    <>
      {/* Home page */}
      <Home />
      {/*--------------> Quiz page */}
      {/* <Quiz /> */}
      {/* -------------->Result page */}
      {/* <Result /> */}
    </>
  );
}

// Export the App component as the default export
export default App;
