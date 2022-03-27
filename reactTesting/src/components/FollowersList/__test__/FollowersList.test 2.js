import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import FollowersList from "../FollowersList";

const MockFollowersList = () => {
  return (
    <BrowserRouter>
      <FollowersList />
    </BrowserRouter>
  );
};

describe("FollowersList", () => {
  beforeEach(() => {
    // console.log("RUNS BEFORE EACH TEST")
    jest.mock("../../../__mocks__/axios");
  });

  // beforeAll(() => {
  //     console.log("RUNS ONCE BEFORE ALL TESTS")
  // })

  // afterEach(() => {
  //     console.log("RUNS AFTER EACH TEST")
  // })

  // afterAll(() => {
  //     console.log("RUNS ONCE AFTER ALL TESTS")
  // })

  test("should fetch and render followers element", async () => {
    render(<MockFollowersList />);
    const followerDivElement = await screen.findByTestId(`follower-item-0`);
    expect(followerDivElement).toBeInTheDocument();
  });

  test("should fetch and render multiple followers element", async () => {
    render(<MockFollowersList />);
    const followerDivElement = await screen.findAllByTestId(`follower-item-0`);
    expect(followerDivElement.length).toBe(1); // cloud be more
  });

  // test('should fetch and render followers element', async () => {
  //     render(
  //         <MockFollowersList />
  //     );

  //     const followerDivElement = await screen.findByTestId(`follower-item-0`)
  //     expect(followerDivElement).toBeInTheDocument();
  // });
});
