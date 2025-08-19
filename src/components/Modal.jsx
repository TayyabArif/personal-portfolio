import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Modal = ({ isOpen, onClose, type, message, title }) => {
  if (!isOpen) return null;

  const getModalStyles = () => {
    switch (type) {
      case 'success':
        return {
          bgColor: 'bg-green-500',
          icon: '✓',
          title: title || 'Success!',
          textColor: 'text-green-800'
        };
      case 'error':
        return {
          bgColor: 'bg-red-500',
          icon: '✕',
          title: title || 'Error!',
          textColor: 'text-red-800'
        };
      default:
        return {
          bgColor: 'bg-blue-500',
          icon: 'ℹ',
          title: title || 'Info',
          textColor: 'text-blue-800'
        };
    }
  };

  const styles = getModalStyles();

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        
        {/* Modal */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative bg-black-200 rounded-2xl p-8 max-w-md w-full mx-4 border border-tertiary"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <div className={`w-10 h-10 rounded-full ${styles.bgColor} flex items-center justify-center text-white text-xl font-bold`}>
                {styles.icon}
              </div>
              <h3 className="text-white text-xl font-bold">{styles.title}</h3>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Content */}
          <div className="mb-6">
            <p className="text-gray-300 text-center leading-relaxed">
              {message}
            </p>
          </div>

          {/* Footer */}
          <div className="flex justify-center">
            <button
              onClick={onClose}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                type === 'success' 
                  ? 'bg-green-600 hover:bg-green-700 text-white' 
                  : type === 'error'
                  ? 'bg-red-600 hover:bg-red-700 text-white'
                  : 'bg-tertiary hover:bg-blue-600 text-white'
              }`}
            >
              {type === 'success' ? 'Great!' : 'OK'}
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Modal; 