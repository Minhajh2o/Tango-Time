import React from 'react';
import { FaUser } from 'react-icons/fa';

const TeamMemberCard = ({ name, role, bio, expertise }) => {
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <div className="avatar placeholder mb-4">
          <div className="bg-primary text-primary-content rounded-full w-20">
            <span className="text-3xl">
              <FaUser />
            </span>
          </div>
        </div>
        <h3 className="card-title text-2xl">{name}</h3>
        <p className="text-lg font-semibold text-primary">{role}</p>
        <p className="text-gray-600 mt-2">{bio}</p>
        <div className="mt-4">
          <span className="badge badge-outline">{expertise}</span>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;

