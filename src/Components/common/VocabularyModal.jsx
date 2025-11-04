import React from 'react';
import { FaInfoCircle } from 'react-icons/fa';

const VocabularyModal = ({ vocab, isOpen, onClose }) => {
  if (!isOpen || !vocab) return null;

  return (
    <div className="modal modal-open">
      <div className="modal-box max-w-2xl mx-4 sm:mx-6">
        <h3 className="font-bold text-xl sm:text-2xl mb-3 md:mb-4 text-primary break-all">
          {vocab.word}
        </h3>
        
        <div className="space-y-3 md:space-y-4">
          {/* Word Info */}
          <div>
            <p className="text-base sm:text-lg italic text-gray-500">
              {vocab.pronunciation}
            </p>
            <p className="text-lg sm:text-xl font-semibold">
              Meaning: {vocab.meaning}
            </p>
          </div>

          {/* When to Say */}
          <div className="bg-blue-50 p-3 md:p-4 rounded-lg">
            <h4 className="font-semibold text-base sm:text-lg mb-2 flex items-center">
              <FaInfoCircle className="mr-2 text-primary shrink-0" />
              When to Say:
            </h4>
            <p className="text-gray-900 text-sm sm:text-base">{vocab.when_to_say}</p>
          </div>

          {/* Example */}
          <div className="bg-purple-50 p-3 md:p-4 rounded-lg border-l-4 border-primary">
            <h4 className="font-semibold text-primary text-base sm:text-lg mb-2">Example:</h4>
            <p className="text-gray-900 whitespace-pre-line text-sm sm:text-base">
              {vocab.example}
            </p>
          </div>
        </div>

        <div className="modal-action">
          <button onClick={onClose} className="btn btn-primary btn-sm sm:btn-md">
            Close
          </button>
        </div>
      </div>
      <div className="modal-backdrop" onClick={onClose}></div>
    </div>
  );
};

export default VocabularyModal;
