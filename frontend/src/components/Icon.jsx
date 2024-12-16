import React from "react";
import IonIcon from "@reacticons/ionicons";

const Icon = ({ customClass, onClick, name }) => {
  return (
    <button
      className={
        "flex h-[calc(32px+16px)] w-[calc(32px+16px)] items-center justify-center rounded-[8px] " +
        customClass
      }
      onClick={onClick}
    >
      <IonIcon name={name} className="pointer-events-none" />
    </button>
  );
};

export default Icon;
