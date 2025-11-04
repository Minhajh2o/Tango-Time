import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router';
import { FaArrowLeft, FaInfoCircle } from 'react-icons/fa';
import vocabulariesData from '../data/vocabularies.json';

const Lesson = () => {
  const { lesson_no } = useParams();
  const navigate = useNavigate();
  const [vocabularies, setVocabularies] = useState([]);
  const [selectedVocab, setSelectedVocab] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Filter vocabularies by lesson number
    const lessonVocabs = vocabulariesData.filter(
      (vocab) => vocab.lesson_no === parseInt(lesson_no)
    );
    setVocabularies(lessonVocabs);
  }, [lesson_no]);

  // Get difficulty color
  const getDifficultyColor = (difficulty) => {
    switch (difficulty.toLowerCase()) {
      case 'easy':
        return 'border-success bg-green-50';
      case 'medium':
        return 'border-warning bg-yellow-50';
      case 'difficult':
        return 'border-error bg-red-50';
      default:
        return 'border-info bg-blue-50';
    }
  };

  // Get difficulty badge color
  const getDifficultyBadge = (difficulty) => {
    switch (difficulty.toLowerCase()) {
      case 'easy':
        return 'badge-success';
      case 'medium':
        return 'badge-warning';
      case 'difficult':
        return 'badge-error';
      default:
        return 'badge-info';
    }
  };

  const handleWhenToSay = (vocab) => {
    setSelectedVocab(vocab);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedVocab(null);
  };

  return (
    <div className="min-h-screen bg-base-200">
      {/* Page Header */}
      <div className="bg-linear-to-r from-purple-600 to-blue-600 text-white py-12">
        <div className="container mx-auto px-4">
          <button
            onClick={() => navigate('/start-learning')}
            className="btn btn-ghost text-white mb-4"
          >
            <FaArrowLeft className="mr-2" />
            Back to Lessons
          </button>
          <h1 className="text-4xl md:text-5xl font-bold">Lesson {lesson_no}</h1>
          <p className="text-xl mt-2">
            {vocabularies.length} vocabularies to master
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {vocabularies.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-2xl text-gray-600">No vocabularies found for this lesson.</p>
            <Link to="/start-learning" className="btn btn-primary mt-4">
              Go Back to Lessons
            </Link>
          </div>
        ) : (
          <>
            {/* Vocabulary Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {vocabularies.map((vocab) => (
                <div
                  key={vocab.id}
                  className={`card shadow-xl border-2 ${getDifficultyColor(
                    vocab.difficulty
                  )} hover:shadow-2xl transition-all`}
                >
                  <div className="card-body">
                    {/* Difficulty Badge */}
                    <div className="flex justify-between items-start mb-2">
                      <span
                        className={`badge ${getDifficultyBadge(
                          vocab.difficulty
                        )} badge-lg`}
                      >
                        {vocab.difficulty}
                      </span>
                      <span className="badge badge-outline">
                        {vocab.part_of_speech}
                      </span>
                    </div>

                    {/* Word in Japanese */}
                    <h2 className="card-title text-3xl font-bold text-primary mb-2">
                      {vocab.word}
                    </h2>

                    {/* Pronunciation */}
                    <p className="text-xl text-gray-700 italic mb-2">
                      {vocab.pronunciation}
                    </p>

                    {/* Meaning */}
                    <p className="text-lg font-semibold text-gray-900 mb-4">
                      Meaning: {vocab.meaning}
                    </p>

                    {/* When to Say Button */}
                    <div className="card-actions justify-end mt-4">
                      <button
                        onClick={() => handleWhenToSay(vocab)}
                        className="btn btn-primary btn-sm"
                      >
                        <FaInfoCircle className="mr-2" />
                        When to Say
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Back to Lesson Button */}
            <div className="text-center mt-12">
              <Link
                to="/start-learning"
                className="btn btn-primary btn-lg"
              >
                <FaArrowLeft className="mr-2" />
                Back to Lesson
              </Link>
            </div>
          </>
        )}
      </div>

      {/* Modal for "When to Say" */}
      {showModal && selectedVocab && (
        <div className="modal modal-open">
          <div className="modal-box max-w-2xl">
            <h3 className="font-bold text-2xl mb-4 text-primary">
              {selectedVocab.word}
            </h3>
            
            <div className="space-y-4">
              {/* Word Info */}
              <div>
                <p className="text-lg italic text-gray-600">
                  {selectedVocab.pronunciation}
                </p>
                <p className="text-xl font-semibold">
                  Meaning: {selectedVocab.meaning}
                </p>
              </div>

              {/* When to Say */}
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-lg mb-2 flex items-center">
                  <FaInfoCircle className="mr-2 text-primary" />
                  When to Say:
                </h4>
                <p className="text-gray-900">{selectedVocab.when_to_say}</p>
              </div>

              {/* Example */}
              <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-primary">
                <h4 className="font-semibold text-primary text-lg mb-2">Example:</h4>
                <p className="text-gray-900 whitespace-pre-line">
                  {selectedVocab.example}
                </p>
              </div>
            </div>

            <div className="modal-action">
              <button onClick={closeModal} className="btn btn-primary">
                Close
              </button>
            </div>
          </div>
          <div className="modal-backdrop" onClick={closeModal}></div>
        </div>
      )}
    </div>
  );
};

export default Lesson;
