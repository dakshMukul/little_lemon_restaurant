import { render, screen } from '@testing-library/react';
import App from './App';

test("renders a link that points to Little Lemon webpage", ()=>{
  render(<App />);
  const linkElement = screen.getByAltText("Little Lemon Restaurant");
  expect(linkElement).toBeInTheDocument();
})
//render funtion: renders the componenet that you would like to test