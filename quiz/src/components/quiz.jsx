import React, { Component } from "react";
class App extends Component {
  render() {
    return (
      <div class="quiz_box">
        <h1 class="title">Questions</h1>
        <h3>10 of 10</h3>
        <div class="questions">
          <p>What is the capital of India?</p>
        </div>
        <div class="Options">
          <ul>
            <li>Delhi</li>
            <li>Mumbai</li>
            <li>Kolkata</li>
            <li>Chennai</li>
          </ul>
        </div>
        <div class="buttons">
          <button class="hover-button">Previous</button>
          <button class="hover-button">Next</button>
          <button class="hover-button">Quit</button>
        </div>
      </div>
    );
  }
}
export default App;
