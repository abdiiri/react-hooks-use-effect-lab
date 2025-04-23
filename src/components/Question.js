import React, { useState, useEffect } from "react";

function Question({ question, answers = [], onAnswered }) {
  const [timeRemaining, setTimeRemaining] = useState(10);

  useEffect(() => {
    // Set up the timer
    const timeout = setTimeout(() => {
      setTimeRemaining((prevTime) => prevTime - 1);
    }, 1000);

    // When timeRemaining hits 0
    if (timeRemaining === 0) {
      setTimeRemaining(10); // Reset timer
      onAnswered(false); // Notify parent
    }

    // Cleanup function to clear the timeout
    return () => clearTimeout(timeout);
  }, [timeRemaining, onAnswered]);

  return (
    <div>
      {/* Access the `prompt` property if `question` is an object */}
      <h1>{typeof question === "string" ? question : question.prompt}</h1>
      <ul>
        {answers.map((answer, index) => (
          <li key={index}>{answer}</li>
        ))}
      </ul>
      <p>{timeRemaining} seconds remaining</p>
    </div>
  ); // <-- Ensure this closing parenthesis is here
}

export default Question;
