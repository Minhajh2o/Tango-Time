import React from 'react';
import { Link } from 'react-router';
import { FaPlay, FaGraduationCap } from 'react-icons/fa';
import tutorialVideos from '../data/tutorials.json';

const Tutorial = () => {

  return (
    <div className="min-h-screen bg-base-200">
      <div className="bg-linear-to-r from-purple-600 to-pink-600 text-white py-8 md:py-12 lg:py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4">Japanese Learning Tutorials</h1>
          <p className="text-base sm:text-lg md:text-xl px-4">Master Japanese with our curated video tutorials</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6 md:py-10 lg:py-12">
        <div className="mb-6 md:mb-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 md:mb-4">Watch & Learn</h2>
          <p className="text-base md:text-lg text-gray-500 px-4">Immerse yourself in comprehensive Japanese language tutorials</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8 mb-8 md:mb-12">
          {tutorialVideos.map((video) => (
            <div key={video.id} className="card bg-base-100 shadow-xl">
              <figure className="px-3 md:px-4 pt-3 md:pt-4">
                <div className="w-full aspect-video">
                  <iframe
                    width="100%"
                    height="100%"
                    src={video.embedded_link}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="rounded-lg"
                  ></iframe>
                </div>
              </figure>
              <div className="card-body p-4 md:p-6">
                <h3 className="card-title text-base sm:text-lg md:text-xl">
                  <FaPlay className="text-primary shrink-0" />
                  {video.title}
                </h3>
                <p className="text-gray-500 text-sm sm:text-base">{video.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="card bg-linear-to-r from-blue-500 to-purple-500 text-white shadow-xl">
          <div className="card-body text-center py-8 md:py-12 px-4">
            <FaGraduationCap className="text-4xl sm:text-5xl md:text-6xl mx-auto mb-3 md:mb-4" />
            <h3 className="text-2xl sm:text-3xl font-bold mb-3 md:mb-4">Ready to Practice?</h3>
            <p className="text-base sm:text-lg md:text-xl mb-4 md:mb-6">
              Now that you have watched the tutorials, it is time to apply your knowledge!
            </p>
            <p className="text-sm sm:text-base md:text-lg mb-6 md:mb-8">
              Start learning vocabularies with our interactive lessons and track your progress.
            </p>
            <div className="card-actions justify-center">
              <Link to="/start-learning" className="btn btn-secondary btn-sm sm:btn-md lg:btn-lg gap-2">
                <FaGraduationCap className="text-xl sm:text-2xl" />
                Learn Vocabularies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tutorial;
