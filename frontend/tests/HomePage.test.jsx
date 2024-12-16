import React from "react";
import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter, useNavigate } from "react-router-dom";
import HomePage from "../src/pages/HomePage";

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useNavigate: vi.fn(),
  };
});

describe("HomePage Component", () => {
  it("should render the homepage with title, description, and 'Get Started' button", () => {
    render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>,
    );

    const mainTitle = screen.getByText("Darlan's Taskify software");
    expect(mainTitle).toBeInTheDocument();

    const description = screen.getByText(
      "Building a smart, modern app to simplify your tasks.",
    );
    expect(description).toBeInTheDocument();

    const getStartedButton = screen.getByText("Get Started");
    expect(getStartedButton).toBeInTheDocument();
  });

  it("should navigate to the signup page when 'Get Started' button is clicked", () => {
    const navigate = vi.fn();
    vi.mocked(useNavigate).mockReturnValue(navigate);

    render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>,
    );

    const getStartedButton = screen.getByText("Get Started");
    fireEvent.click(getStartedButton);

    expect(navigate).toHaveBeenCalledWith("/signup");
  });

  it("should render the feature sections with the correct headings", () => {
    render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>,
    );

    const featureTitles = screen.getAllByText("Create timeliness");
    expect(featureTitles.length).toBe(3);
  });

  it("should render the image correctly", () => {
    render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>,
    );

    const image = screen.getByRole("img");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "assets/images/task.png");
    expect(image).toHaveClass("aspect-square h-full object-cover");
  });
});
