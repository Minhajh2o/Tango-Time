import React from 'react';

const LevelSelector = ({ selectedLevel, onLevelChange, levels }) => {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold mb-6">Select Your Level</h2>
      <div className="join">
        {levels.map((level) => (
          <button
            key={level.value}
            className={`btn join-item ${selectedLevel === level.value ? 'btn-active btn-primary' : ''}`}
            onClick={() => onLevelChange(level.value)}
          >
            {level.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LevelSelector;

