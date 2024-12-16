import React from "react";
import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter, useNavigate } from "react-router-dom";
import Header from "../src/components/Header";

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useNavigate: vi.fn(),
  };
});

describe("Header Component", () => {
  it("should render the header with Taskify logo and navigation buttons", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );

    const logo = screen.getByText("Taskify");
    expect(logo).toBeInTheDocument();
    const loginButton = screen.getByText("Log In");
    expect(loginButton).toBeInTheDocument();
    const signupButton = screen.getByText("Sign Up");
    expect(signupButton).toBeInTheDocument();
  });

  it("should navigate to the home page when Taskify logo is clicked", () => {
    const navigate = vi.fn();
    vi.mocked(useNavigate).mockReturnValue(navigate);

    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );

    const logo = screen.getByText("Taskify");
    fireEvent.click(logo);

    expect(navigate).toHaveBeenCalledWith("/");
  });

  it("should navigate to the login page when Log In button is clicked", () => {
    const navigate = vi.fn();
    vi.mocked(useNavigate).mockReturnValue(navigate);

    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );

    const loginButton = screen.getByText("Log In");
    fireEvent.click(loginButton);

    expect(navigate).toHaveBeenCalledWith("/login");
  });

  it("should navigate to the signup page when Sign Up button is clicked", () => {
    const navigate = vi.fn();
    vi.mocked(useNavigate).mockReturnValue(navigate);

    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );

    const signupButton = screen.getByText("Sign Up");
    fireEvent.click(signupButton);

    expect(navigate).toHaveBeenCalledWith("/signup");
  });
});
