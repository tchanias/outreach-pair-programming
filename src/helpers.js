export const ActivityTypes = ["note", "call", "coffee", "beer", "meeting"];

export const returnTitle = (type) => {
  return (
    <div>
      <span className={"highlighted"}>You</span>
      <span>{` had a ${type} with `}</span>
      <span className={"highlighted"}>Milton Romaguera</span>
    </div>
  );
};

export const returnDesc = (note) => {
  return (
    <div>
      <span>{note}</span>
    </div>
  );
};
