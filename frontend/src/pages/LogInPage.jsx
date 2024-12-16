import React from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import PageStructure from "../components/PageStructure";
import Input from "../components/Input";
import PurpleButton from "../components/PurpleButton";

export default function App() {
  const navigate = useNavigate();
  const emailInput = useRef();
  const passwordInput = useRef();

  async function formSubmit(element) {
    element.preventDefault();

    const emailValue = emailInput.current.value;
    const passwordValue = passwordInput.current.value;

    emailInput.current.value = "";
    passwordInput.current.value = "";

    try {
      const response = await fetch("http://localhost:8080/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: emailValue,
          password: passwordValue,
        }),
      });

      if (response.ok) {
        const data = await response.json();

        if (data.id) {
          localStorage.setItem("user", JSON.stringify(data));
          navigate("/tasks");
        }
      }
    } catch (error) {
      alert(error);
      console.error(error);
    }
  }

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
          <h1 className="p-[64px] text-center text-[2rem] text-primary-dark dark:text-white">
            Log In
          </h1>
          <form onSubmit={formSubmit} className="flex flex-col">
            <Input
              ref={emailInput}
              placeholder="Email"
              customClass="w-[512px]"
              pattern="^[^@]+@[^@]+\.[^@]+$"
            />
            <Input
              ref={passwordInput}
              placeholder="Password"
              customClass="w-[512px]"
              type="password"
            />
            <div className="flex items-start justify-center p-[32px]">
              <PurpleButton type="submit">Log In</PurpleButton>
            </div>
          </form>
          <div className="h-[256px]"></div>
        </div>
      </main>
    </PageStructure>
  );
}
