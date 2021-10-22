import { useState } from "react";
import * as data from "../questions.json";
import Question from "./Question";

const questions = data.questions;

const Content = () => {
  const [questionsAnswered, setQuestionsAnswered] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);

  return (
    <div className="content">
      <div>Questions Answered: {questionsAnswered}</div>
      <div>Correct Answers: {correctAnswers}</div>
      {questions.map((q, index) => {
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
          />
        );
      })}
    </div>
  );
};

export default Content;
