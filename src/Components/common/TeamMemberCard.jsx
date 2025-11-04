import React from 'react';
import { FaUser } from 'react-icons/fa';

const TeamMemberCard = ({ name, role, bio, expertise }) => {
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body p-5 md:p-6">
        <div className="avatar placeholder mb-3 md:mb-4">
          <div className="bg-primary text-primary-content rounded-full w-16 sm:w-20">
            <span className="text-2xl sm:text-3xl">
              <FaUser />
            </span>
          </div>
        </div>
        <h3 className="card-title text-xl sm:text-2xl">{name}</h3>
        <p className="text-base sm:text-lg font-semibold text-primary">{role}</p>
        <p className="text-gray-500 mt-2 text-sm sm:text-base">{bio}</p>
        <div className="mt-3 md:mt-4">
          <span className="badge badge-outline text-xs sm:text-sm">{expertise}</span>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;

