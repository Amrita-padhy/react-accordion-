import React, { useState } from "react";
import { AiOutlinePlusSquare, AiOutlineMinusSquare } from "react-icons/ai";

function Question({ title, answer }) {
  const [showAnswer, setShowAnswer] = useState(false);
  // handleClick
  const handleClick = () => {
    setShowAnswer(!showAnswer);
  };
  return (
    <div className="container p-1">
      <div className="border-2  p-4 shadow-md border-sky-200 flex flex-col justify-between">
        <div className="text-lg font-medium text-gray-800">{title}</div>
        <button className="text-3xl" onClick={handleClick}>
          {showAnswer ? (
            <AiOutlineMinusSquare className="text-red-800 cursor-pointer " />
          ) : (
            <AiOutlinePlusSquare className="text-green-800 cursor-pointer " />
          )}
        </button>

        <div className="qst-ans flex flex-col">
          {showAnswer && <p className="text-sm"> {answer}</p>}
        </div>
      </div>
    </div>
  );
}

export default Question;
