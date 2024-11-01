import React from 'react';
import { Story } from '../types/Story';

interface Props {
  story: Story;
}

const StoryItem: React.FC<Props> = ({ story }) => {
  const formatTime = (timestamp: number) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleString('it-IT');
  };

  return (
    <a
      href={story.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block p-4 mb-2 bg-hn-beige hover:bg-white transition-colors duration-200"
    >
      <h2 className="text-lg font-semibold text-black hover:text-hn-orange">
        {story.title}
      </h2>
      <div className="mt-2 text-sm text-gray-600">
        <span>{story.score} punti</span>
        <span className="mx-2">•</span>
        <span>di {story.by}</span>
        <span className="mx-2">•</span>
        <span>{formatTime(story.time)}</span>
      </div>
    </a>
  );
};

export default StoryItem; 