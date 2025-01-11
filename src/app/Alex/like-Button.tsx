'use client'; // Ensures client-side rendering

import { useState } from 'react';

export default function Liking() {
  const [likes, setLikes] = useState(0);

  return (
    <div>
        <button
      onClick={() => setLikes(likes + 1)} // Increment state on click
    >
      Likes: {likes}
    </button>
    </div>
  );
}