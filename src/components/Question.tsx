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
};

const Question = (props: QuestionProps) => {
  const [selected, setSelected] = useState("");
  const [answered, setAnswered] = useState(false);
  const {
    question,
    answers,
    correctAnswer,
    feedback,
    setCorrectAnswers,
    correctAnswers,
    questionsAnswered,
    setQuestionsAnswered,
  } = props;
  const isCorrectAnswer = selected === correctAnswer;

  return (
    <div className="question">
      <div className="question-title">{question}</div>
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
      <div
        className="submitAnswer"
        onClick={() => {
          if (!answered) {
            setAnswered(true);
            setQuestionsAnswered(questionsAnswered + 1);
            if (isCorrectAnswer) setCorrectAnswers(correctAnswers + 1);
          }
        }}
      >
        submit
      </div>
      {answered && <div className="feedback">Feedback: {feedback}</div>}
    </div>
  );
};

export default Question;
