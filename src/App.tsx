import React from 'react';
import StoryList from './components/StoryList';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-hn-orange p-4">
        <div className="max-w-4xl mx-auto flex justify-center">
          <h1 className="text-2xl font-bold text-white">
            Hacker News - Latest News
          </h1>
        </div>
      </header>
      <main className="py-8">
        <StoryList />
      </main>
    </div>
  );
}

export default App; 