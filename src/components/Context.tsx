import { useState } from "react";
import * as data from "../questions.json";
import Question from "./Question";

const questions = data.questions;

const Content = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [questionsAnswered, setQuestionsAnswered] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [finished, setFinished] = useState(false);

  const q = questions[currentQuestion];

  const questionComponents = questions.map((q, index) => {
    const { question, answers, correctAnswer, feedback } = q;
    const isFinalQuestion = index === questions.length - 1;

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
        isFinalQuestion={isFinalQuestion}
        setFinished={setFinished}
      />
    );
  });

  return (
    <div className="content">
      {!finished && questionComponents[currentQuestion]}
      {finished && (
        <>
          <div>Thank you for your response.</div>
          <div>Questions Answered: {questionsAnswered}</div>
          <div>Correct Answers: {correctAnswers}</div>
        </>
      )}
    </div>
  );
};

export default Content;
