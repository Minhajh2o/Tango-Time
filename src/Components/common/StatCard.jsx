import React from 'react';

const StatCard = ({ icon: Icon, title, value, description }) => {
  return (
    <div className="stat">
      <div className="stat-figure text-gray-100 text-4xl">
        {Icon && <Icon />}
      </div>
      <div className="stat-title text-gray-200">{title}</div>
      <div className="stat-value text-gray-100">{value}</div>
      <div className="stat-desc text-gray-200">{description}</div>
    </div>
  );
};

export default StatCard;

