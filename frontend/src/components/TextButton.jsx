import React from "react";

const TextButton = ({ children, onClick, customClass }) => {
  return (
    <button className={"p-[8px] " + customClass} onClick={onClick}>
      {children}
    </button>
  );
};

export default TextButton;
