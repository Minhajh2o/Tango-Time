import React from 'react';

const StatCard = ({ icon: Icon, title, value, description }) => {
  return (
    <div className="stat place-items-center py-4 md:py-6">
      <div className="stat-figure text-gray-100 text-3xl sm:text-4xl">
        {Icon && <Icon />}
      </div>
      <div className="stat-title text-gray-200 text-sm sm:text-base">{title}</div>
      <div className="stat-value text-gray-100 text-2xl sm:text-3xl md:text-4xl">{value}</div>
      <div className="stat-desc text-gray-200 text-xs sm:text-sm">{description}</div>
    </div>
  );
};

export default StatCard;

