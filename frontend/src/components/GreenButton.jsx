import React from "react";

const GreenButton = ({ children, onClick, customClass }) => {
  return (
    <button
      className={
        "h-[calc(32px+16px)] rounded border-[2px] border-green bg-green p-[8px] text-primary-dark hover:bg-primary-dark hover:text-green " +
        customClass
      }
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default GreenButton;
