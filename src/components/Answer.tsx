const Answer = ({
  index,
  selected,
  answer,
  onclick,
  answered,
  isCorrectAnswer,
}: any) => {
  const numberDict: any = {
    // @ts-ignore
    one: `1️⃣`,
    // @ts-ignore

    two: `2️⃣`,
    three: `3️⃣`,
    four: `4️⃣`,
  };
  return (
    <div
      onClick={() => {
        if (!answered) {
          onclick(index);
        }
      }}
      className={`answer ${index === selected ? "selected" : ""}`}
    >
      {`${numberDict[index]}: ${answer} ${
        answered ? (isCorrectAnswer ? "✔️" : "❌") : ""
      }`}
    </div>
  );
};

export default Answer;
