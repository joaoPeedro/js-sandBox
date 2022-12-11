import { render, screen, fireEvent } from "@testing-library/react";
import AddInput from "../AddInput";

const mockedSetTodo = jest.fn(); // its a mocked function

describe("AddInput", () => {
  test("should render input element", () => {
    render(<AddInput todos={[]} setTodos={mockedSetTodo} />);
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    expect(inputElement).toBeInTheDocument();
  });

  test("should be able to type into input", () => {
    render(<AddInput todos={[]} setTodos={mockedSetTodo} />);
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    fireEvent.click(inputElement);
    fireEvent.change(inputElement, {
      target: { value: "Go Grocery Shopping" },
    });
    expect(inputElement.value).toBe("Go Grocery Shopping");
  });

  test("should be able to type into input and trigger function", () => {
    render(<AddInput todos={[]} setTodos={mockedSetTodo} />);
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    fireEvent.click(inputElement);
    fireEvent.change(inputElement, {
      target: { value: "Go Grocery Shopping" },
    });
    const buttonElement = screen.getByRole("button", { name: /Add/i });
    fireEvent.click(buttonElement);
    expect(mockedSetTodo).toBeCalled();
  });

  test("should have empty input when add button is cliked", () => {
    render(<AddInput todos={[]} setTodos={mockedSetTodo} />);
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    fireEvent.change(inputElement, {
      target: { value: "Go Grocery Shopping" },
    });
    const buttonElement = screen.getByRole("button", { name: /Add/i });
    fireEvent.click(buttonElement);
    expect(inputElement.value).toBe("");
  });
});
