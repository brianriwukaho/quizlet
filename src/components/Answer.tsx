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
      className={`answer ${index === selected ? "selected" : ""}`}
    >
      {`${answer} ${answered ? (isCorrectAnswer ? "✔️" : "❌") : ""}`}
    </div>
  );
};

export default Answer;
