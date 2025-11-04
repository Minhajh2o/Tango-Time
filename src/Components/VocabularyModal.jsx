import React from 'react';
import { FaInfoCircle } from 'react-icons/fa';

const VocabularyModal = ({ vocab, isOpen, onClose }) => {
  if (!isOpen || !vocab) return null;

  return (
    <div className="modal modal-open">
      <div className="modal-box max-w-2xl">
        <h3 className="font-bold text-2xl mb-4 text-primary">
          {vocab.word}
        </h3>
        
        <div className="space-y-4">
          {/* Word Info */}
          <div>
            <p className="text-lg italic text-gray-500">
              {vocab.pronunciation}
            </p>
            <p className="text-xl font-semibold">
              Meaning: {vocab.meaning}
            </p>
          </div>

          {/* When to Say */}
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold text-lg mb-2 flex items-center">
              <FaInfoCircle className="mr-2 text-primary" />
              When to Say:
            </h4>
            <p className="text-gray-900">{vocab.when_to_say}</p>
          </div>

          {/* Example */}
          <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-primary">
            <h4 className="font-semibold text-primary text-lg mb-2">Example:</h4>
            <p className="text-gray-900 whitespace-pre-line">
              {vocab.example}
            </p>
          </div>
        </div>

        <div className="modal-action">
          <button onClick={onClose} className="btn btn-primary">
            Close
          </button>
        </div>
      </div>
      <div className="modal-backdrop" onClick={onClose}></div>
    </div>
  );
};

export default VocabularyModal;
