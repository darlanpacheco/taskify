import React from "react";

const TextButton = ({ children, onClick, customClass }) => {
  return (
    <button className={customClass} onClick={onClick}>
      {children}
    </button>
  );
};

export default TextButton;
