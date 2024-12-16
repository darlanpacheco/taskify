import React from "react";
import Icon from "./Icon";

const Add = ({ userId, createTask }) => {
  return (
    <div className="m-[32px] flex h-[256px] w-[256px] flex-col items-center justify-center rounded-[8px] bg-primary-dark p-[16px]">
      <Icon
        name="add"
        onClick={() => {
          createTask(userId);
        }}
        customClass="bg-secondary-dark text-[2.4rem]"
      />
    </div>
  );
};

export default Add;
