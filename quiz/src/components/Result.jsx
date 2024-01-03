import React, { Component } from "react";
class Result extends Component {
  render() {
    return (
      <div className="result_page">
        <h1>Quiz Completed!</h1>
        <p>
          Total Questions: <b>10</b>
        </p>
        <p>
          Attempted Questions: <b>8</b>
        </p>
        <p>
          Correct Answers: <b>6</b>
        </p>
        <p>
          Wrong Answers: <b>4</b>
        </p>
        <h2>Your Score: 60%</h2>
        <div className="result_buttons">
          <button className="result_button">Play Again</button>
          <button className="result_button">Back to Home</button>
        </div>
      </div>
    );
  }
}

export default Result;
