import { render, screen } from '@testing-library/react';
import ReactDOM from 'react-dom';
import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getAllByTitle(('Portfolio');
//   expect(linkElement).toBeInTheDocument();
// });

it('renders header links', () => {
  render(<App />);
  const linkElement = document.getElementsByTagName('a');
  expect(linkElement[0].innerHTML).toContain('Portfolio');
  expect(linkElement[1].innerHTML).toContain('Skills');
});
