import React, { useState } from "react";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { questions } from "./data";
import Question from "./Question";
function Faq() {
  return (
    <>
      <div className="flex justify-center   w-screen h-screen p-1 items-center">
        <section className="faq-sec w-96 h-auto   ">
          <div className="container text-center p-2 flex flex-col justify-center items-center">
            <MdOutlineLibraryBooks
              size={30}
              color="orangered"
              className="m-auto"
            />
            <h2 className="text-4xl mx-2 ">FAQS</h2>
            <p className="w-3/4 max-w-md text-gray-400 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
              explicabo deleniti aliquam dignissimos molestiae soluta impedit
              velit, distinctio delectus fugit autem nihil ducimus! Quae
              molestiae labore cumque consectetur laudantium natus!
            </p>
          </div>
          <div className="qst">
            {questions.map((qst) => (
              <Question key={qst.id} title={qst.title} answer={qst.answer} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

export default Faq;
