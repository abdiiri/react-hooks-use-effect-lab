import React, { useState, useEffect } from "react";

function Question({ question, answers, onAnswered }) {
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
      <h1>{question}</h1>
      <ul>
        {answers.map((answer, index) => (
          <li key={index}>{answer}</li>
        ))}
      </ul>
      <p>Time Remaining: {timeRemaining} seconds</p>
    </div>
  );
}

export default Question;
