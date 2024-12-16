import React from "react";

const Input = ({ placeholder, customClass }) => {
  return (
    <input
      className={
        "m-[8px] border-[2px] border-primary-dark p-[12px] text-primary-dark focus:outline-none " +
        customClass
      }
      placeholder={placeholder}
    />
  );
};

export default Input;
