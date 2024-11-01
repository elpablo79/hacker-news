import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useStories } from '../hooks/useStories';
import StoryItem from './StoryItem';

const StoryList: React.FC = () => {
  const [page, setPage] = useState(0);
  const { stories, loading, error, hasMore, fetchStories } = useStories(20);

  useEffect(() => {
    fetchStories(0);
  }, []);

  const loadMore = () => {
    const nextPage = page + 1;
    fetchStories(nextPage * 20);
    setPage(nextPage);
  };

  if (error) return <div className="text-center text-red-500">{error}</div>;

  return (
    <div className="max-w-4xl mx-auto px-4">
      <InfiniteScroll
        dataLength={stories.length}
        next={loadMore}
        hasMore={hasMore}
        loader={<div className="text-center">Caricamento...</div>}
      >
        {stories.map(story => (
          <StoryItem key={story.id} story={story} />
        ))}
      </InfiniteScroll>
    </div>
  );
};

export default StoryList;