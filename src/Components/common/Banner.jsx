import React from 'react';
import { Link } from 'react-router';
import { FaBook, FaPlayCircle } from 'react-icons/fa';
import CountUp from 'react-countup';

const Banner = () => {
  return (
    <div className="hero min-h-[500px] md:min-h-[600px] lg:min-h-[700px] bg-linear-to-r from-purple-600 via-pink-600 to-blue-600 text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 md:top-20 left-5 md:left-10 text-6xl md:text-9xl">語</div>
        <div className="absolute bottom-10 md:bottom-20 right-5 md:right-10 text-6xl md:text-9xl">学</div>
        <div className="absolute top-20 md:top-40 right-20 md:right-40 text-5xl md:text-7xl hidden sm:block">習</div>
      </div>
      
      <div className="hero-content text-center relative z-10 px-4">
        <div className="max-w-3xl">
          <h1 className="mb-4 md:mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
            Master Japanese Vocabulary
          </h1>
          <p className="mb-6 md:mb-8 text-base sm:text-lg md:text-xl lg:text-2xl font-light px-4">
            Learn thousands of Japanese words with interactive lessons and expert guidance. 
            Start your journey to fluency today!
          </p>
          <div className="flex gap-3 md:gap-4 justify-center flex-wrap">
            <Link to="/start-learning" className="btn btn-secondary btn-sm sm:btn-md lg:btn-lg shadow-xl hover:scale-105 transition-transform">
              <FaBook className="mr-1 sm:mr-2" />
              <span className="text-sm sm:text-base">Start Learning</span>
            </Link>
            <Link to="/tutorial" className="btn btn-outline btn-sm sm:btn-md lg:btn-lg text-white border-white border-2 hover:bg-white hover:text-purple-600 shadow-xl hover:scale-105 transition-transform">
              <FaPlayCircle className="mr-1 sm:mr-2" />
              <span className="text-sm sm:text-base">View Tutorials</span>
            </Link>
          </div>
          
          {/* Stats */}
          <div className="stats shadow-2xl mt-8 md:mt-12 bg-white text-gray-800 flex-col sm:flex-row w-full max-w-full">
            <div className="stat place-items-center py-4">
              <div className="stat-value text-primary text-2xl sm:text-3xl md:text-4xl">
                <CountUp end={5000} duration={2.5} separator="," useEasing={false} />+
                </div>
              <div className="stat-title text-xs sm:text-sm text-primary">Vocabulary Words</div>
            </div>
            <div className="stat place-items-center py-4">
              <div className="stat-value text-secondary text-2xl sm:text-3xl md:text-4xl">
                <CountUp end={250} duration={2.5} useEasing={false} />+
              </div>
              <div className="stat-title text-xs sm:text-sm text-secondary">Lessons</div>
            </div>
            <div className="stat place-items-center py-4">
              <div className="stat-value text-accent text-2xl sm:text-3xl md:text-4xl">
                <CountUp end={10000} duration={2.5} separator="," useEasing={false} />+
              </div>
              <div className="stat-title text-xs sm:text-sm text-accent">Active Learners</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
