import React from 'react';
import { Link } from 'react-router';
import { FaBook, FaPlayCircle } from 'react-icons/fa';

const Banner = () => {
  return (
    <div className="hero min-h-[600px] bg-linear-to-r from-purple-600 via-pink-600 to-blue-600 text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 text-9xl">語</div>
        <div className="absolute bottom-20 right-10 text-9xl">学</div>
        <div className="absolute top-40 right-40 text-7xl">習</div>
      </div>
      
      <div className="hero-content text-center relative z-10">
        <div className="max-w-3xl">
          <h1 className="mb-6 text-5xl md:text-7xl font-bold leading-tight">
            Master Japanese Vocabulary
          </h1>
          <p className="mb-8 text-xl md:text-2xl font-light">
            Learn thousands of Japanese words with interactive lessons and expert guidance. 
            Start your journey to fluency today!
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/start-learning" className="btn btn-secondary btn-lg shadow-xl hover:scale-105 transition-transform">
              <FaBook className="mr-2" />
              Start Learning
            </Link>
            <Link to="/tutorial" className="btn btn-outline btn-lg text-white border-white border-2 hover:bg-white hover:text-purple-600 shadow-xl hover:scale-105 transition-transform">
              <FaPlayCircle className="mr-2" />
              View Tutorials
            </Link>
          </div>
          
          {/* Stats */}
          <div className="stats shadow-2xl mt-12 bg-white text-gray-800">
            <div className="stat place-items-center">
              <div className="stat-value text-primary">5000+</div>
              <div className="stat-title">Vocabulary Words</div>
            </div>
            <div className="stat place-items-center">
              <div className="stat-value text-secondary">250+</div>
              <div className="stat-title">Lessons</div>
            </div>
            <div className="stat place-items-center">
              <div className="stat-value text-accent">10K+</div>
              <div className="stat-title">Active Learners</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
