import { render, screen } from "@testing-library/react";
import Header from "../Header";

describe("Header", () => {
  test("should render same text passed into title prop", () => {
    render(<Header title="todo" />);
    const headingElement = screen.getByText(/todo/i);
    expect(headingElement).toBeInTheDocument();
  });
});

// // WITH GETBY

// test('should render same text passed into title prop', () => {
//     render(
//         <Header
//           title="todo"
//         />
//     );
//     const h1Element = screen.getByRole("heading", { name: /todo/i }); // name is the text of the element
//     expect(h1Element).toBeInTheDocument();
// });

// test('should render same text passed into title prop', () => {
//     render(
//         <Header
//           title="todo"
//         />
//     );
//     const h1Element = screen.getByRole("heading");
//     expect(h1Element).toBeInTheDocument();
// });

// test('should render same text passed into title prop', () => {
//     render(
//         <Header
//           title="todo"
//         />
//     );
//     const h1Element = screen.getByTitle("Header");
//     expect(h1Element).toBeInTheDocument();
// });

// test('should render same text passed into title prop', () => {
//     render(
//         <Header
//           title="todo"
//         />
//     );
//     const h2Element = screen.getByTestId("header-2");
//     expect(h2Element).toBeInTheDocument();
// });

// // WITH FINDBY

// test('should render same text passed into title prop', async () => {
//     render(
//         <Header
//           title="todo"
//         />
//     );
//     const h1Element = await screen.findByText(/todo/i);
//     expect(h1Element).toBeInTheDocument();
// });

// // WITH QUERYBY

// test('should render same text passed into title prop', () => {
//     render(
//         <Header
//           title="todo"
//         />
//     );
//     const h1Element = screen.queryByText(/dogs/i);
//     expect(h1Element).not.toBeInTheDocument        // NOT TO BE IN THE DOCUMENT
// });

// // WITH GETALLBY

// test('should render same text passed into title prop', () => {
//     render(
//         <Header
//           title="todo"
//         />
//     );
//     const h1Elements = screen.getAllByText(/todo/i);
//     expect(h1Elements.length).toBe(1);        // TO BE 1
// });
