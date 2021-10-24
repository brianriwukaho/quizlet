import { useState } from "react";
import * as data from "../questions.json";
import Question from "./Question";

const questions = data.questions;

const Content = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [questionsAnswered, setQuestionsAnswered] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);

  const q = questions[currentQuestion];

  const questionComponents = questions.map((q, index) => {
    const { question, answers, correctAnswer, feedback } = q;
    return (
      <Question
        index={index}
        key={index.toString()}
        question={question}
        answers={answers}
        correctAnswer={correctAnswer}
        feedback={feedback}
        setCorrectAnswers={setCorrectAnswers}
        correctAnswers={correctAnswers}
        questionsAnswered={questionsAnswered}
        setQuestionsAnswered={setQuestionsAnswered}
        setCurrentQuestion={setCurrentQuestion}
      />
    );
  });

  return (
    <div className="content">
      <div>Questions Answered: {questionsAnswered}</div>
      <div>Correct Answers: {correctAnswers}</div>
      {questionComponents[currentQuestion]}
    </div>
  );
};

export default Content;
