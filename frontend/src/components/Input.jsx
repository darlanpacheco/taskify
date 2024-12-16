import React, { forwardRef } from "react";

const Input = forwardRef(({ placeholder, customClass, pattern, type }, ref) => {
  return (
    <input
      ref={ref}
      className={
        "m-[8px] border-[2px] border-primary-dark p-[calc(8px+4px)] text-primary-dark focus:outline-none dark:border-white dark:bg-secondary-dark dark:text-white " +
        customClass
      }
      placeholder={placeholder}
      pattern={pattern}
      type={type}
      required
    />
  );
});

export default Input;
