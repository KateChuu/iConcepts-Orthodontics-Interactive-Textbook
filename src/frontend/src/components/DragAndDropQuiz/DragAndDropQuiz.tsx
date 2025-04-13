"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

// Tailwind setup for simplicity
const options = [
  { id: 1, label: "Option 1", color: "bg-red-400", shape: "rounded-full" },
  { id: 2, label: "Option 2", color: "bg-green-400", shape: "rounded-lg" },
  { id: 3, label: "Option 3", color: "bg-blue-400", shape: "rounded-md" },
  { id: 4, label: "Option 4", color: "bg-yellow-400", shape: "rounded-sm" },
  { id: 5, label: "Option 5", color: "bg-yellow-400", shape: "rounded-sm" },
  { id: 6, label: "Option 6", color: "bg-yellow-400", shape: "rounded-sm" },
];

// Example of a correct answer for validation purposes
const correctAnswer = [options[1], options[3]]; // Options 2 and 4 are the correct answers

const DragAndDropQuiz = () => {
  const [selectedOptions, setSelectedOptions] = useState<
    { id: number; label: string; color: string; shape: string }[]
  >([]);
  const [availableOptions, setAvailableOptions] = useState(options);
  const [result, setResult] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [isDragging, setIsDragging] = useState(false); // State to track dragging
  const [isUserAnswersCorrect, setIsUserAnswersCorrect] = useState(false); // State for answer correctness

  // Handles dragging from either area
  const handleDragStart = (
    e: React.DragEvent,
    option: (typeof options)[0],
    from: "option" | "answer"
  ) => {
    e.dataTransfer.setData("optionId", option.id.toString());
    e.dataTransfer.setData("fromArea", from);
    setIsDragging(true); // Set dragging state to true
  };

  // Handles dropping into the answer area
  const handleDropToAnswerArea = (e: React.DragEvent) => {
    const droppedOptionId = e.dataTransfer.getData("optionId");
    const fromArea = e.dataTransfer.getData("fromArea");

    const droppedOption = availableOptions.find(
      (option) => option.id === parseInt(droppedOptionId)
    );

    // If coming from options area, add to answer area
    if (
      fromArea === "option" &&
      droppedOption &&
      !selectedOptions.some((opt) => opt.id === droppedOption.id)
    ) {
      setSelectedOptions((prevSelected) => [...prevSelected, droppedOption]);
      setAvailableOptions((prevOptions) =>
        prevOptions.filter((opt) => opt.id !== droppedOption.id)
      );
    }
    e.preventDefault();
    setIsDragging(false); // Reset dragging state after drop
  };

  // Handles dropping back to the options area
  const handleDropToOptionsArea = (e: React.DragEvent) => {
    const droppedOptionId = e.dataTransfer.getData("optionId");
    const fromArea = e.dataTransfer.getData("fromArea");

    const droppedOption = selectedOptions.find(
      (option) => option.id === parseInt(droppedOptionId)
    );

    // If coming from answer area, add back to options area
    if (
      fromArea === "answer" &&
      droppedOption &&
      !availableOptions.some((opt) => opt.id === droppedOption.id)
    ) {
      setAvailableOptions((prevOptions) => [...prevOptions, droppedOption]);
      setSelectedOptions((prevSelected) =>
        prevSelected.filter((opt) => opt.id !== droppedOption.id)
      );
    }
    e.preventDefault();
    setIsDragging(false); // Reset dragging state after drop
  };

  // Prevents default behavior on drag over
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  // Check if the answer is correct
  const checkAnswer = () => {
    const isCorrect =
      selectedOptions.length === correctAnswer.length &&
      selectedOptions.every((opt) =>
        correctAnswer.some((correct) => correct.id === opt.id)
      );

    setResult(isCorrect ? "Correct!" : "Incorrect, try again.");
    setShowModal(true);
    setIsUserAnswersCorrect(isCorrect); // Set the computed value
  };

  // Resets the quiz for retry
  const resetQuiz = () => {
    setAvailableOptions(options);
    setSelectedOptions([]);
    setResult(null);
    setShowModal(false);
  };

  // Determine which answers are correct and incorrect
  const getResultDetails = () => {
    const correctIds = correctAnswer.map((opt) => opt.id);
    const selectedIds = selectedOptions.map((opt) => opt.id);

    return {
      correctOptions: correctAnswer,
      userOptions: selectedOptions.map((opt) => ({
        ...opt,
        isCorrect: correctIds.includes(opt.id),
      })),
    };
  };

  const { correctOptions, userOptions } = getResultDetails();

  return (
    <div className="flex flex-col items-center">
      {/* Question Box */}
      <h1 className="text-2xl mb-6">
        Drag the correct options to the answer area
      </h1>

      {/* Draggable Options */}
      <div
        className="flex flex-wrap space-x-4 space-y-2 mb-6 p-6 border-2 border-dashed border-gray-400 w-full max-w-md"
        onDrop={handleDropToOptionsArea}
        onDragOver={handleDragOver}
      >
        {availableOptions.map((option) => (
          <div
            key={option.id}
            className={`p-4 cursor-pointer ${option.color} ${option.shape}`}
            draggable
            onDragStart={(e) => handleDragStart(e, option, "option")}
          >
            {option.label}
          </div>
        ))}
      </div>

      {/* Answer Area */}
      <div
        className={`w-full max-w-md p-12 border-4 border-dashed border-gray-400 flex flex-wrap items-center justify-center space-x-4 space-y-2 mb-6 ${
          isDragging ? "bg-gray-200" : ""
        }`}
        onDrop={handleDropToAnswerArea}
        onDragOver={handleDragOver}
        onDragEnter={() => setIsDragging(true)}
        onDragLeave={() => setIsDragging(false)}
      >
        {selectedOptions.length > 0 ? (
          selectedOptions.map((option) => (
            <div
              key={option.id}
              className={`p-4 cursor-pointer ${option.color} ${option.shape}`}
              draggable
              onDragStart={(e) => handleDragStart(e, option, "answer")}
            >
              {option.label}
            </div>
          ))
        ) : (
          <div className="text-gray-500">Drop your answers here</div>
        )}
      </div>

      {/* Check Answer Button */}
      <button
        onClick={checkAnswer}
        disabled={selectedOptions.length === 0}
        className={`p-2 px-6 rounded ${
          selectedOptions.length > 0
            ? "bg-blue-500 hover:bg-blue-600 text-white"
            : "bg-gray-300 text-gray-500 cursor-not-allowed"
        }`}
      >
        Check Answer
      </button>

      {/* Modal for showing result */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <motion.div
            className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full flex flex-col items-center"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }} // Slide-down animation
          >
            <h2 className="text-2xl mb-4 text-center">{result}</h2>

            <div className="flex w-full space-x-4 mb-6">
              {/* Correct Answers Column */}
              <div className="flex-1 p-4 border-2 border-green-400 bg-green-100 rounded-lg">
                <h2 className="text-xl font-bold text-green-800 mb-4">
                  Correct Answers
                </h2>
                <div className="flex flex-col space-y-2">
                  {correctOptions.map((option) => (
                    <div
                      key={option.id}
                      className={`p-4 ${option.color} ${option.shape}`}
                    >
                      {option.label}
                    </div>
                  ))}
                </div>
              </div>

              {/* Your Answers Column */}
              <div
                className={`flex-1 p-4 border-2 rounded-lg ${
                  isUserAnswersCorrect
                    ? "border-green-400 bg-green-100"
                    : "border-red-400 bg-red-100"
                }`}
              >
                <h2
                  className={`text-xl font-bold ${
                    isUserAnswersCorrect ? "text-green-800" : "text-red-800"
                  } mb-4`}
                >
                  Your Answers
                </h2>
                <div className="flex flex-col space-y-2">
                  {userOptions.map((option) => (
                    <div
                      key={option.id}
                      className={`p-4 flex items-center ${
                        option.isCorrect ? "bg-green-400" : "bg-red-400"
                      } ${option.shape} text-white`}
                    >
                      {option.label}
                      {option.isCorrect ? (
                        <span className="ml-2 text-xl">✔️</span>
                      ) : (
                        <span className="ml-2 text-xl">❌</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 flex justify-end space-x-4">
              {result === "Incorrect, try again." && (
                <button
                  onClick={resetQuiz}
                  className="bg-red-500 hover:bg-red-600 text-white p-2 rounded"
                >
                  Retry
                </button>
              )}

              {result === "Correct!" && (
                <button
                  onClick={() => setShowModal(false)}
                  className="bg-green-500 hover:bg-green-600 text-white p-2 rounded"
                >
                  Continue
                </button>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default DragAndDropQuiz;
