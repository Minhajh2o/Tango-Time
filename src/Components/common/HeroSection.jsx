import React from 'react';
import { Link } from 'react-router';
import { FaBook, FaPlayCircle } from 'react-icons/fa';

const HeroSection = ({ title, subtitle, primaryButtonText, primaryButtonLink, secondaryButtonText, secondaryButtonLink, gradient }) => {
  const gradientClasses = gradient || "from-blue-600 via-purple-600 to-pink-600";
  
  return (
    <div className={`hero min-h-[500px] bg-linear-to-r ${gradientClasses} text-white`}>
      <div className="hero-content text-center">
        <div className="max-w-2xl">
          <h1 className="mb-5 text-5xl font-bold">{title}</h1>
          <p className="mb-8 text-xl">{subtitle}</p>
          <div className="flex gap-4 justify-center">
            {primaryButtonText && primaryButtonLink && (
              <Link to={primaryButtonLink} className="btn btn-secondary btn-lg">
                <FaBook className="mr-2" />
                {primaryButtonText}
              </Link>
            )}
            {secondaryButtonText && secondaryButtonLink && (
              <Link to={secondaryButtonLink} className="btn btn-outline btn-lg text-white border-white hover:bg-white hover:text-purple-600">
                <FaPlayCircle className="mr-2" />
                {secondaryButtonText}
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

