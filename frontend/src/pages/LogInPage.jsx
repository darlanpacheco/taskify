import React from "react";
import PageStructure from "../components/PageStructure";
import Input from "../components/Input";

export default function App() {
  return (
    <PageStructure>
      <main className="flex min-h-[calc(100vh-64px)]">
        <div className="flex w-[64%] items-center justify-center">
          <img
            src="assets/images/login.png"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex w-full flex-col items-center justify-center">
          <h1 className="p-[64px] text-center text-[2rem] text-primary-dark">
            Log In
          </h1>
          <Input placeholder="Name or Email" customClass="w-[512px]" />
          <Input placeholder="Password" customClass="w-[512px]" />
          <div className="h-[256px]"></div>
        </div>
      </main>
    </PageStructure>
  );
}
