import { render, screen } from '@testing-library/react';
import { act } from 'react';
import StoryItem from './StoryItem';

const mockStory = {
  id: 1,
  title: 'Test Story',
  url: 'https://example.com',
  time: 1616161616,
  score: 100,
  by: 'testuser'
};

describe('StoryItem', () => {
  it('renders story details correctly', async () => {
    await act(async () => {
      render(<StoryItem story={mockStory} />);
    });
    
    expect(screen.getByText('Test Story')).toBeInTheDocument();
    expect(screen.getByText(/100 punti/)).toBeInTheDocument();
    expect(screen.getByText(/di testuser/)).toBeInTheDocument();
  });

  it('links to the correct URL', async () => {
    await act(async () => {
      render(<StoryItem story={mockStory} />);
    });
    
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', 'https://example.com');
  });
});