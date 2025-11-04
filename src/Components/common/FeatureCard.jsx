import React from 'react';

const FeatureCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
      <div className="card-body text-center p-5 md:p-6">
        <div className="text-4xl sm:text-5xl mb-3 md:mb-4 flex justify-center">
          {Icon && <Icon />}
        </div>
        <h3 className="card-title justify-center text-lg sm:text-xl mb-2">{title}</h3>
        <p className="text-gray-500 text-sm sm:text-base">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;

