import { render, screen } from '@testing-library/react';
import { act } from 'react';
import App from './App';

jest.mock('./components/StoryList', () => {
  return function MockStoryList() {
    return <div data-testid="story-list">Story List</div>;
  };
});

test('renders Hacker News header', async () => {
  await act(async () => {
    render(<App />);
  });
  
  const headerElement = screen.getByText(/Hacker News - Latest News/i);
  expect(headerElement).toBeInTheDocument();
});