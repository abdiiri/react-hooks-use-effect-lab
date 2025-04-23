import React from "react";
import Question from "./components/Question";

function App() {
  const handleAnswered = (isCorrect) => {
    console.log("Answered:", isCorrect);
  };

  return (
    <Question
      question="What is the capital of France?"
      answers={["Paris", "London", "Berlin", "Madrid"]}
      onAnswered={handleAnswered}
    />
  );
}

export default App;
