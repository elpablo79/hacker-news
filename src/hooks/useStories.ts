import { useState, useEffect } from 'react';
import axios from 'axios';
import { Story } from '../types/Story';

const BASE_URL = 'https://hacker-news.firebaseio.com/v0';

export const useStories = (pageSize: number = 20) => {
  const [stories, setStories] = useState<Story[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [hasMore, setHasMore] = useState(true);

  const fetchStories = async (start: number) => {
    try {
      const { data: newStoryIds } = await axios.get(`${BASE_URL}/newstories.json`);
      const storyPromises = newStoryIds
        .slice(start, start + pageSize)
        .map((id: number) => axios.get(`${BASE_URL}/item/${id}.json`));
      
      const newStories = await Promise.all(storyPromises);
      const formattedStories = newStories.map(story => story.data);
      
      setStories(prev => [...prev, ...formattedStories]);
      setHasMore(start + pageSize < newStoryIds.length);
    } catch (err) {
      setError('Errore nel caricamento delle storie');
    } finally {
      setLoading(false);
    }
  };

  return { stories, loading, error, hasMore, fetchStories };
}; 