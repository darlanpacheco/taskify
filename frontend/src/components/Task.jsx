import React from "react";
import { useState } from "react";
import Icon from "./Icon";

const Task = ({
  children,
  taskId,
  done,
  editTextTask,
  editDoneTask,
  deleteTask,
}) => {
  const [isDone, setDone] = useState(done);

  function toggleDone() {
    const tempIsDone = !isDone;
    setDone(tempIsDone);
  }

  return (
    <div className="m-[32px] flex h-[256px] w-[256px] flex-col justify-between rounded-[8px] bg-primary-dark p-[16px]">
      <textarea
        style={{ resize: "none" }}
        className="h-[calc(128px+8px)] overflow-y-auto overflow-x-hidden break-words bg-primary-dark text-center focus:outline-none"
        defaultValue={children}
        disabled
      />
      <div className="flex items-end justify-between">
        <div>
          {isDone ? (
            <Icon
              name="checkmark-circle"
              customClass="bg-green-500 text-[2.4rem]"
              onClick={() => {
                toggleDone();
                editDoneTask(false, taskId);
              }}
            />
          ) : (
            <Icon
              name="close-circle"
              customClass="bg-red-500 text-[2.4rem]"
              onClick={() => {
                toggleDone();
                editDoneTask(true, taskId);
              }}
            />
          )}
        </div>
        <div className="flex">
          <Icon
            name="pencil"
            onClick={(element) => {
              editTextTask(element, taskId);
            }}
            customClass="text-[1.6rem] bg-secondary-dark"
          />
          <Icon
            name="trash-bin"
            customClass="text-[1.6rem] bg-secondary-dark ml-[8px]"
            onClick={() => {
              deleteTask(taskId);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Task;
