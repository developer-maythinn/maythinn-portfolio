// src/ReactionButton.js

import React, { useState } from "react";
import "../../public/css/Reaction.css"; // Import the CSS file for styling

const reactions = [
  { type: "like", emoji: "👍" },
  { type: "love", emoji: "❤️" },
  { type: "haha", emoji: "😂" },
];

const ReactionButton = () => {
  const [selectedReaction, setSelectedReaction] = useState(null);
  const [showReactions, setShowReactions] = useState(false);

  const handleMouseEnter = () => {
    setShowReactions(true);
  };

  const handleMouseLeave = () => {
    setShowReactions(false);
  };

  const handleReactionClick = (reaction) => {
    setSelectedReaction(reaction);
    setShowReactions(false);
  };

  return (
    <div
      className="reaction-button"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button className="main-button">
        {selectedReaction ? selectedReaction.emoji : "👍"}
      </button>
      {showReactions && (
        <div className="reactions-popup">
          {reactions.map((reaction) => (
            <button
              key={reaction.type}
              className="reaction"
              onClick={() => handleReactionClick(reaction)}
            >
              {reaction.emoji}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ReactionButton;
