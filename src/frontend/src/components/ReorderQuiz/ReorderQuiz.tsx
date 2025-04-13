"use client";

import React, { useState, useEffect } from 'react';
import { Reorder } from 'framer-motion';
import './styles.css'; // Ensure your styles are loaded

const ReorderQuiz = ({correctOrder}: {correctOrder: string[]} ) => {

  // Utility function to shuffle the array
  const shuffleArray = (array: string[]) => {
    return [...array].sort(() => Math.random() - 0.5);
  };

  // Track the current order of items
  const [items, setItems] = useState(correctOrder); // Set initial order to the correct order
  const [isClient, setIsClient] = useState(false); // Track if the component has mounted (client-side)

  // Track whether the user has checked the answer
  const [isChecked, setIsChecked] = useState(false);

  // Track whether to show the restart button
  const [isRestartVisible, setIsRestartVisible] = useState(false);

  // Shuffle items only on the client-side after component mounts
  useEffect(() => {
    setItems(shuffleArray(correctOrder)); // Shuffle the items once the component is mounted
    setIsClient(true); // Mark that we're on the client-side
  }, []);

  // Function to check if the current order is correct
  const checkAnswer = () => {
    setIsChecked(true);
    const isCorrect = items.every((item, index) => item === correctOrder[index]);
    setIsRestartVisible(!isCorrect); // Show restart button if incorrect
  };

  // Function to reset the quiz to its initial state
  const restartQuiz = () => {
    setItems(shuffleArray(correctOrder)); // Reset to shuffled order
    setIsChecked(false); // Reset check state
    setIsRestartVisible(false); // Hide the restart button
  };

  // Function to determine background color (white, green for correct, red for incorrect)
  const getBackgroundColor = (item: string, index: number): string => {
    if (!isChecked) return 'bg-white'; // Default background color
    return item === correctOrder[index] ? 'bg-green-200' : 'bg-red-200'; // Green for correct, Red for incorrect
  };

  if (!isClient) {
    // Render nothing or a loader on the server-side to prevent mismatches
    return null;
  }

  return (
    <div className="quiz-container">
      <h1 className="quiz-title">Reorder Quiz</h1>
      <p className="quiz-instructions">Drag the items into the correct order and then click &quot;Check Answer&quot;.</p>
      
      {/* Reorder Group */}
      <Reorder.Group
        axis="y"
        values={items}
        onReorder={setItems}
        className="quiz-list"
      >
        {items.map((item, index) => (
          <Reorder.Item
            key={item}
            value={item}
            className={`quiz-item ${getBackgroundColor(item, index)}`}
          >
            {item}
          </Reorder.Item>
        ))}
      </Reorder.Group>

      {/* Action Buttons */}
      <div className="action-buttons">
        {/* Left-aligned Check Answer Button */}
        <button
          onClick={checkAnswer}
          className="check-answer-button"
          disabled={isChecked} // Disable after checking
        >
          Check Answer
        </button>

        {/* Right-aligned Restart Button */}
        {isRestartVisible && (
          <button
            onClick={restartQuiz}
            className="restart-button"
          >
            Restart
          </button>
        )}
      </div>
    </div>
  );
};

export default ReorderQuiz;
