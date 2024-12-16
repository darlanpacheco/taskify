import React from "react";
import { useState } from "react";
import IonIcon from "@reacticons/ionicons";

const Icon = ({ name }) => {
  return (
    <button className="ml-[8px] flex h-[calc(32px+16px)] w-[calc(32px+16px)] items-center justify-center rounded-[8px] bg-red-500 text-[1.6rem]">
      <IonIcon name={name} />
    </button>
  );
};

const CheckboxIcon = ({ name, customClass, onClick }) => {
  return (
    <button
      className={
        "flex h-[calc(32px+16px)] w-[calc(32px+16px)] items-center justify-center rounded-[8px] text-[2rem] " +
        customClass
      }
      onClick={onClick}
    >
      <IonIcon name={name} />
    </button>
  );
};

const Task = ({ children }) => {
  const [isDone, setDone] = useState(false);

  function toggleDone() {
    const tempIsDone = !isDone;
    setDone(tempIsDone);
  }

  return (
    <div className="m-[32px] flex h-[256px] w-[256px] flex-col justify-between rounded-[8px] bg-primary-dark p-[16px]">
      <div className="h-[calc(128px+8px)] overflow-y-auto overflow-x-hidden break-words text-center">
        {children}
      </div>
      <div className="flex items-end justify-between">
        <div>
          <button onClick={toggleDone}>
            {isDone ? (
              <CheckboxIcon
                name="checkmark-circle"
                customClass="bg-green-500"
              />
            ) : (
              <CheckboxIcon name="close-circle" customClass="bg-red-500" />
            )}
            {
              //<CheckboxIcon name="checkmark-circle" />
            }
          </button>
        </div>
        <div className="flex">
          <Icon name="pencil" />
          <Icon name="trash-bin" />
        </div>
      </div>
    </div>
  );
};

export default Task;
