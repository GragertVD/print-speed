import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import Footer from ".";


test('Test App', () => {
  render(<Footer />);
  const Element = screen.getByText(/Made by Gragert V.D./i);
  expect(Element).toBeInTheDocument();
});