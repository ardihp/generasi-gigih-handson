import { screen, render } from "@testing-library/react";
import Search from "./Pages/Gallery";
import { Provider } from "react-redux";
import store from "./Redux/Store";

test("check all components render correctly", async () => {
  render(
    <Provider store={store}>
      <Search />
    </Provider>
  );

  const button = screen.getByTestId("buttonSearch");
  const input = screen.getByLabelText("Search..");
//   await screen.getByTestId("imageSearch");

  expect(button).toBeInTheDocument();
  expect(input).toBeInTheDocument();
//   expect(screen.getByTestId("imageSearch")).toBeInTheDocument();
});
