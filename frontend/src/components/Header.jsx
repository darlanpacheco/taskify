import React from "react";
import { useNavigate } from "react-router-dom";
import WhiteButton from "./WhiteButton";
import TextButton from "./TextButton";

export default function Header() {
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 flex h-[64px] items-center justify-center bg-primary-dark text-white">
      <div className="absolute left-[16px]">
        <TextButton
          customClass="text-[2rem]"
          onClick={() => {
            navigate("/");
          }}
        >
          Taskify
        </TextButton>
      </div>
      <div className="absolute right-[16px] text-primary-dark">
        <WhiteButton
          onClick={() => {
            navigate("/login");
          }}
          customClass="mr-[16px]"
        >
          Log In
        </WhiteButton>
        <WhiteButton
          onClick={() => {
            navigate("/signup");
          }}
        >
          Sign Up
        </WhiteButton>
      </div>
    </header>
  );
}
