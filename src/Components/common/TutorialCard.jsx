import React from 'react';
import { FaPlay, FaClock } from 'react-icons/fa';

const TutorialCard = ({ title, difficulty, duration, description, thumbnail: Icon, onWatch }) => {
  return (
    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
      <div className="card-body">
        <div className="text-6xl mb-4 text-center flex justify-center">
          {Icon && <Icon />}
        </div>
        <h3 className="card-title text-xl">{title}</h3>
        <div className="flex gap-2 mb-2">
          <div className="badge badge-primary">{difficulty}</div>
          <div className="badge badge-secondary flex items-center gap-1">
            <FaClock className="text-xs" />
            {duration}
          </div>
        </div>
        <p className="text-gray-600">{description}</p>
        <div className="card-actions justify-end mt-4">
          <button onClick={onWatch} className="btn btn-primary">
            <FaPlay className="mr-2" />
            Watch Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default TutorialCard;

