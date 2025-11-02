import React from 'react';
import { FaClock, FaBookOpen, FaPlay } from 'react-icons/fa';

const CourseCard = ({ name, duration, lessons, description, onStart }) => {
  return (
    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
      <div className="card-body">
        <h4 className="card-title text-xl">{name}</h4>
        <p className="text-gray-600">{description}</p>
        <div className="divider"></div>
        <div className="flex justify-between items-center">
          <div className="flex gap-4">
            <div className="flex items-center gap-1 text-sm text-gray-500">
              <FaClock />
              <span>{duration}</span>
            </div>
            <div className="flex items-center gap-1 text-sm text-gray-500">
              <FaBookOpen />
              <span>{lessons} lessons</span>
            </div>
          </div>
        </div>
        <div className="card-actions justify-end mt-4">
          <button onClick={onStart} className="btn btn-primary">
            <FaPlay className="mr-2" />
            Start Course
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;

