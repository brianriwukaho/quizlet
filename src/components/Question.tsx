import { useState } from "react";
import Answer from "./Answer";

type Answer = {
  [key: string]: string;
};

type Question = {
  question: string;
  answers: any;
  correctAnswer: string;
  feedback: string;
};

type QuestionProps = {
  index: number;
  question: string;
  answers: any;
  correctAnswer: string;
  feedback: string;
  setCorrectAnswers: any;
  correctAnswers: number;
  questionsAnswered: number;
  setQuestionsAnswered: any;
  setCurrentQuestion: any;
  isFinalQuestion: boolean;
  setFinished: any;
};

const Question = (props: QuestionProps) => {
  const [selected, setSelected] = useState("");
  const [answered, setAnswered] = useState(false);
  const {
    index,
    question,
    answers,
    correctAnswer,
    feedback,
    setCorrectAnswers,
    correctAnswers,
    questionsAnswered,
    setQuestionsAnswered,
    setCurrentQuestion,
    isFinalQuestion,
    setFinished,
  } = props;
  const isCorrectAnswer = selected === correctAnswer;

  return (
    <div className="question">
      <div className="question-number">Question {index + 1}</div>
      <div className="question-title">{question}</div>
      <div className="answers-container">
        {" "}
        {answers.map((answer: Answer, index: number) => {
          const questionNumber = Object.keys(answer)[0];
          const text = Object.values(answer)[0];
          const isCorrectAnswer = questionNumber === correctAnswer;
          return (
            <Answer
              isCorrectAnswer={isCorrectAnswer}
              key={index.toString()}
              index={questionNumber}
              selected={selected}
              answered={answered}
              answer={text}
              onclick={setSelected}
            />
          );
        })}
      </div>
      <div className="buttons-container">
        <div
          className="submit"
          onClick={() => {
            if (!answered && selected) {
              setAnswered(true);
              setQuestionsAnswered(questionsAnswered + 1);
              if (isCorrectAnswer) setCorrectAnswers(correctAnswers + 1);
            }
          }}
        >
          Submit
        </div>
        {answered && !isFinalQuestion && (
          <div className="next" onClick={() => setCurrentQuestion(index + 1)}>
            Next
          </div>
        )}
        {answered && isFinalQuestion && (
          <div onClick={() => setFinished(true)} className="finish">
            Finish
          </div>
        )}
      </div>
      {answered && (
        <div
          className={`feedback ${isCorrectAnswer ? "correct" : "incorrect"}`}
        >
          {feedback}
        </div>
      )}
    </div>
  );
};

export default Question;
