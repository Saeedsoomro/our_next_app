import React from "react";
import { AiFillMessage } from "react-icons/ai";

const FloatButton = ({ isManuScrolled }) => {
  return (
    <button
      className={
        isManuScrolled
          ? "floatButton hidden z-10 md:block text-center transit opacity-100"
          : "floatButton  transit opacity-0 z-0"
      }
    >
      <p className="text-4xl flex justify-center">
        <AiFillMessage />
      </p>
    </button>
  );
};

export default FloatButton;
