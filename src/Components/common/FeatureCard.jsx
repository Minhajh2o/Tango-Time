import React from 'react';

const FeatureCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
      <div className="card-body text-center">
        <div className="text-5xl mb-4 flex justify-center">
          {Icon && <Icon />}
        </div>
        <h3 className="card-title justify-center text-xl mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;

