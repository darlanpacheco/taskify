import React from "react";

const PurpleButton = ({ children, onClick, customClass, type }) => {
  return (
    <button
      className={
        "h-[calc(32px+16px)] rounded border-[2px] border-purple bg-purple p-[8px] text-primary-dark hover:bg-purple-light " +
        customClass
      }
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default PurpleButton;
