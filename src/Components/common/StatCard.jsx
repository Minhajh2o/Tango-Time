import React from 'react';

const StatCard = ({ icon: Icon, title, value, description }) => {
  return (
    <div className="stat">
      <div className="stat-figure text-primary text-4xl">
        {Icon && <Icon />}
      </div>
      <div className="stat-title">{title}</div>
      <div className="stat-value text-primary">{value}</div>
      <div className="stat-desc">{description}</div>
    </div>
  );
};

export default StatCard;

