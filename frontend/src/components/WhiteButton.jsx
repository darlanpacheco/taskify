import React from "react";

const WhiteButton = ({ children, onClick, customClass }) => {
  return (
    <button
      className={
        "rounded border-[2px] border-white bg-white p-[8px] text-primary-dark hover:bg-primary-dark hover:text-white " +
        customClass
      }
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default WhiteButton;
