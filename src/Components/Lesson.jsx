import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router';
import { FaArrowLeft, FaInfoCircle, FaVolumeUp } from 'react-icons/fa';
import vocabulariesData from '../data/vocabularies.json';
import VocabularyModal from './VocabularyModal';

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
        return 'border-success bg-green-100';
      case 'medium':
        return 'border-warning bg-yellow-100';
      case 'difficult':
        return 'border-error bg-red-100';
      default:
        return 'border-info bg-blue-100';
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

  // Text-to-speech function for Japanese pronunciation
  const speakWord = (word) => {
    if ('speechSynthesis' in window) {
      // Cancel any ongoing speech
      window.speechSynthesis.cancel();
      
      const utterance = new SpeechSynthesisUtterance(word);
      utterance.lang = 'ja-JP'; // Japanese language
      utterance.rate = 0.8; // Slightly slower for clarity
      utterance.pitch = 1;
      utterance.volume = 1;
      
      window.speechSynthesis.speak(utterance);
    } else {
      alert('Text-to-speech is not supported in your browser.');
    }
  };

  return (
    <div className="min-h-screen bg-base-200">
      {/* Page Header */}
      <div className="bg-linear-to-r from-purple-600 to-blue-600 text-white py-6 md:py-10 lg:py-12">
        <div className="container mx-auto px-4">
          <button
            onClick={() => navigate('/start-learning')}
            className="btn btn-ghost text-white mb-3 md:mb-4 btn-sm md:btn-md"
          >
            <FaArrowLeft className="mr-1 md:mr-2" />
            <span className="hidden sm:inline">Back to Lessons</span>
            <span className="sm:hidden">Back</span>
          </button>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">Lesson {lesson_no}</h1>
          <p className="text-base sm:text-lg md:text-xl mt-2">
            {vocabularies.length} vocabularies to master
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6 md:py-10 lg:py-12">
        {vocabularies.length === 0 ? (
          <div className="text-center py-12 md:py-20">
            <p className="text-xl md:text-2xl text-gray-500 px-4">No vocabularies found for this lesson.</p>
            <Link to="/start-learning" className="btn btn-primary mt-4 btn-sm sm:btn-md">
              Go Back to Lessons
            </Link>
          </div>
        ) : (
          <>
            {/* Vocabulary Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
              {vocabularies.map((vocab) => (
                <div
                  key={vocab.id}
                  className={`card shadow-xl border-2 ${getDifficultyColor(
                    vocab.difficulty
                  )} hover:shadow-2xl transition-all`}
                >
                  <div className="card-body p-4 md:p-6">
                    {/* Difficulty Badge */}
                    <div className="flex justify-between items-start mb-2 flex-wrap gap-2">
                      <span
                        className={`badge ${getDifficultyBadge(
                          vocab.difficulty
                        )} badge-sm sm:badge-md md:badge-lg`}
                      >
                        {vocab.difficulty}
                      </span>
                      <span className="badge badge-outline text-primary badge-sm sm:badge-md">
                        {vocab.part_of_speech}
                      </span>
                    </div>

                    {/* Word in Japanese with Speaker Icon */}
                    <div className="flex items-center gap-2 mb-2">
                      <h2 className="card-title text-2xl sm:text-3xl font-bold text-primary break-all">
                        {vocab.word}
                      </h2>
                      <button
                        onClick={() => speakWord(vocab.word)}
                        className="btn btn-circle btn-xs sm:btn-sm btn-primary shrink-0"
                        title="Listen to pronunciation"
                      >
                        <FaVolumeUp className="text-xs sm:text-sm" />
                      </button>
                    </div>

                    {/* Pronunciation */}
                    <p className="text-base sm:text-lg md:text-xl text-gray-700 italic mb-2">
                      {vocab.pronunciation}
                    </p>

                    {/* Meaning */}
                    <p className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 mb-3 md:mb-4">
                      Meaning: {vocab.meaning}
                    </p>

                    {/* When to Say Button */}
                    <div className="card-actions justify-end mt-2 md:mt-4">
                      <button
                        onClick={() => handleWhenToSay(vocab)}
                        className="btn btn-primary btn-xs sm:btn-sm"
                      >
                        <FaInfoCircle className="mr-1 sm:mr-2" />
                        <span className="text-xs sm:text-sm">When to Say</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Back to Lesson Button */}
            <div className="text-center mt-8 md:mt-12">
              <Link
                to="/start-learning"
                className="btn btn-primary btn-sm sm:btn-md lg:btn-lg"
              >
                <FaArrowLeft className="mr-1 sm:mr-2" />
                Back to Lesson
              </Link>
            </div>
          </>
        )}
      </div>

      {/* Vocabulary Modal */}
      <VocabularyModal 
        vocab={selectedVocab}
        isOpen={showModal}
        onClose={closeModal}
      />
    </div>
  );
};

export default Lesson;
