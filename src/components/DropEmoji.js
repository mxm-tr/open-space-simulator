import React, { useEffect, useState } from 'react';
import './DropEmoji.css';

const DropEmoji = ({ emoji = '🌧️', count = 10 }) => {
  const [emojis, setEmojis] = useState([]);

  useEffect(() => {
    const generateEmojis = () => {
      const newEmojis = [];
      for (let i = 0; i < count; i++) {
        newEmojis.push({
          id: i,
          left: Math.random() * 100,
          duration: Math.random() * 5 + 3,
        });
      }
      setEmojis(newEmojis);
    };
    
    generateEmojis();
  }, [count]);

  return (
    <div className="emoji-container">
      {emojis.map((emojiItem) => (
        <span
          key={emojiItem.id}
          className="emoji"
          style={{
            left: `${emojiItem.left}%`,
            animationDuration: `${emojiItem.duration}s`,
          }}
        >
          {emoji}
        </span>
      ))}
    </div>
  );
};

export default DropEmoji;
