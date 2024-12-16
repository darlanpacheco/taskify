import React from "react";
import { useNavigate } from "react-router-dom";
import PageStructure from "../components/PageStructure";
import GreenButton from "../components/GreenButton";

const Feature = ({ h1, children }) => {
  return (
    <div className="mx-[32px] h-[256px] w-[512px] rounded-[8px] bg-primary-dark p-[32px]">
      <h1 className="text-[1.6rem]">{h1}</h1>
      <h2 className="py-[16px]">{children}</h2>
    </div>
  );
};

export default function App() {
  const navigate = useNavigate();

  return (
    <PageStructure>
      <main className="min-h-[calc(100vh-64px)]">
        <div className="flex h-[512px] bg-primary dark:bg-primary-dark">
          <div className="flex w-[64%] flex-col items-center justify-center text-center">
            <h1 className="pb-[16px] text-center text-[4rem] leading-[64px]">
              Darlan's Taskify software
            </h1>
            <h2 className="pb-[32px] text-center">
              Building a smart, modern app to simplify your tasks.
            </h2>
            <GreenButton
              customClass="w-[128px]"
              onClick={() => {
                navigate("/signup");
              }}
            >
              Get Started
            </GreenButton>
          </div>
          <div className="flex w-[36%] items-center justify-center">
            <img
              src="assets/images/task.png"
              className="aspect-square h-full object-cover"
            />
          </div>
        </div>
        <h1 className="p-[64px] text-center text-[2rem] text-primary-dark">
          Features
        </h1>
        <div className="flex justify-center pb-[64px]">
          <Feature h1="Create timeliness">hello-world!</Feature>
          <Feature h1="Create timeliness">hello-world!</Feature>
          <Feature h1="Create timeliness">hello-world!</Feature>
        </div>
      </main>
    </PageStructure>
  );
}
