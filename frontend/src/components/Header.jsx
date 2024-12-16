import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import WhiteButton from "./WhiteButton";
import TextButton from "./TextButton";
import IonIcon from "@reacticons/ionicons";

function logged() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  if (user) {
    return (
      <>
        <div className="mr-[16px] flex items-center justify-center text-white">
          {user.name}
        </div>
        <WhiteButton
          onClick={() => {
            localStorage.clear("user");
            navigate("/");
          }}
          customClass="mr-[16px] flex items-center justify-center  w-[calc(32px+16px)]"
        >
          <IonIcon name="person" />
        </WhiteButton>
      </>
    );
  }

  return (
    <>
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
        customClass="mr-[16px]"
      >
        Sign Up
      </WhiteButton>
    </>
  );
}

export default function Header() {
  const navigate = useNavigate();
  const [isDarkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const theme = JSON.parse(localStorage.getItem("theme"));

    if (theme !== null) {
      setDarkMode(theme);
    }

    const htmlElement = document.querySelector("html");
    htmlElement.classList.toggle("dark", theme);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setDarkMode(newTheme);
    localStorage.setItem("theme", JSON.stringify(newTheme));
    const htmlElement = document.querySelector("html");
    htmlElement.classList.toggle("dark", newTheme);
  };

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
      <div className="absolute right-[16px] flex text-primary-dark">
        {logged()}
        <WhiteButton
          onClick={toggleTheme}
          customClass="flex items-center justify-center w-[calc(32px+16px)]"
        >
          {isDarkMode ? (
            <IonIcon name="sunny"></IonIcon>
          ) : (
            <IonIcon name="moon"></IonIcon>
          )}
        </WhiteButton>
      </div>
    </header>
  );
}
