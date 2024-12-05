import "@testing-library/jest-dom";

// import react-testing methods
import { render, screen } from "@testing-library/react";
// userEvent library simulates user interactions by dispatching the events that would happen if the interaction took place in a browser.
import userEvent from "@testing-library/user-event";

// the component to test
import App from "./app";

import { describe, it, expect, beforeEach } from "vitest";

import React from "react";

describe("App", () => {
  beforeEach(() => render(<App message="hello" />));
  it("greets the user with a message", async () => {
    expect(screen.getByText("hello")).toBeInTheDocument();
  });
  it("shows a counter initially set to 0", async () => {
    expect(screen.getByText("Count: 0")).toBeInTheDocument();
  });
  it("allows the user to increment the counter by 1", async () => {
    await userEvent.click(screen.getByText("Increment"));
    expect(screen.getByText("Count: 1")).toBeInTheDocument();
  });
});
