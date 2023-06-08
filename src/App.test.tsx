import { render, fireEvent } from "@testing-library/react";
import App from "./App";

test("renders logos and increases count on button click", () => {
  const { getByAltText, getByText } = render(<App title="React" />);

  // Check logos are present
  const viteLogo = getByAltText(/Vite logo/i);
  expect(viteLogo).toBeInTheDocument();

  const reactLogo = getByAltText(/React logo/i);
  expect(reactLogo).toBeInTheDocument();

  // Check title
  const titleElement = getByText(/Vite \+ React/i);
  expect(titleElement).toBeInTheDocument();

  // Check button interaction
  const button = getByText(/count is 0/i);
  fireEvent.click(button);
  const buttonAfterClick = getByText(/count is 1/i);
  expect(buttonAfterClick).toBeInTheDocument();
});
