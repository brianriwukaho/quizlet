const Answer = ({
  index,
  selected,
  answer,
  onclick,
  answered,
  isCorrectAnswer,
}: any) => {
  return (
    <div
      onClick={() => {
        if (!answered) {
          onclick(index);
        }
      }}
      className={`answer ${index === selected ? "selected" : ""} ${
        answered
          ? isCorrectAnswer
            ? "correct-answer"
            : "incorrect-answer"
          : ""
      }`}
    >
      {`${answer} ${answered ? (isCorrectAnswer ? "✔️" : "❌") : ""}`}
    </div>
  );
};

export default Answer;
