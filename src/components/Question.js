import React, { useState } from "react";
import { AiOutlinePlusSquare, AiOutlineMinusSquare } from "react-icons/ai";

function Question() {
  const [showAnswer, setShowAnswer] = useState(false);
  return (
    <div className="container p-1">
      <div className="border-2 flex justify-between p-4 shadow-md">
        <h4 className="text-xl font-bold   ">Can i Learn React ?</h4>
        <button className="text-3xl">
          {showAnswer ? (
            <AiOutlineMinusSquare className="text-red-800" />
          ) : (
            <AiOutlinePlusSquare className="text-green-800" />
          )}
        </button>
      </div>
    </div>
  );
}

export default Question;
