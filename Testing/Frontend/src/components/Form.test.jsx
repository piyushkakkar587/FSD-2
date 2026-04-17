import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import Form from "./Form";

describe("Login Form Component", () => {

  beforeEach(() => {
    vi.spyOn(window, "alert").mockImplementation(() => {});
  });

  it("renders fields", () => {
    render(<Form />);
    expect(screen.getByLabelText("email")).toBeInTheDocument();
    expect(screen.getByLabelText("password")).toBeInTheDocument();
  });

  it("shows error for short password", () => {
    render(<Form />);

    fireEvent.change(screen.getByLabelText("email"), {
      target: { value: "test@test.com" },
    });

    fireEvent.change(screen.getByLabelText("password"), {
      target: { value: "123" },
    });

    fireEvent.click(screen.getByText("Login"));

    expect(screen.getByText("Min 6 characters")).toBeInTheDocument();
  });

  it("submits successfully", () => {
    render(<Form />);

    fireEvent.change(screen.getByLabelText("email"), {
      target: { value: "test@test.com" },
    });

    fireEvent.change(screen.getByLabelText("password"), {
      target: { value: "123456" },
    });

    fireEvent.click(screen.getByText("Login"));

    expect(window.alert).toHaveBeenCalledWith("Form submitted successfully");
  });

});