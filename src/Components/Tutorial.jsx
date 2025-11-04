import React from 'react';
import { Link } from 'react-router';
import { FaPlay, FaGraduationCap } from 'react-icons/fa';
import tutorialVideos from '../data/tutorials.json';

const Tutorial = () => {

  return (
    <div className="min-h-screen bg-base-200">
      <div className="bg-linear-to-r from-purple-600 to-pink-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Japanese Learning Tutorials</h1>
          <p className="text-xl">Master Japanese with our curated video tutorials</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Watch & Learn</h2>
          <p className="text-lg text-gray-600">Immerse yourself in comprehensive Japanese language tutorials</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {tutorialVideos.map((video) => (
            <div key={video.id} className="card bg-base-100 shadow-xl">
              <figure className="px-4 pt-4">
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
              <div className="card-body">
                <h3 className="card-title text-xl">
                  <FaPlay className="text-primary" />
                  {video.title}
                </h3>
                <p className="text-gray-600">{video.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="card bg-linear-to-r from-blue-500 to-purple-500 text-white shadow-xl">
          <div className="card-body text-center py-12">
            <FaGraduationCap className="text-6xl mx-auto mb-4" />
            <h3 className="text-3xl font-bold mb-4">Ready to Practice?</h3>
            <p className="text-xl mb-6">
              Now that you have watched the tutorials, it is time to apply your knowledge!
            </p>
            <p className="text-lg mb-8">
              Start learning vocabularies with our interactive lessons and track your progress.
            </p>
            <div className="card-actions justify-center">
              <Link to="/start-learning" className="btn btn-secondary btn-lg gap-2">
                <FaGraduationCap className="text-2xl" />
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
