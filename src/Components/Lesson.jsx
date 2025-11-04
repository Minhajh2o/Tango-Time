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
            <p className="text-2xl text-gray-500">No vocabularies found for this lesson.</p>
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
                      <span className="badge badge-outline text-primary">
                        {vocab.part_of_speech}
                      </span>
                    </div>

                    {/* Word in Japanese with Speaker Icon */}
                    <div className="flex items-center gap-2 mb-2">
                      <h2 className="card-title text-3xl font-bold text-primary">
                        {vocab.word}
                      </h2>
                      <button
                        onClick={() => speakWord(vocab.word)}
                        className="btn btn-circle btn-sm btn-primary"
                        title="Listen to pronunciation"
                      >
                        <FaVolumeUp />
                      </button>
                    </div>

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
