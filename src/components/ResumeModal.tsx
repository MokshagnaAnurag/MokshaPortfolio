import React from "react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  resumeUrl: string;
}

const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose, resumeUrl }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-lg shadow-lg max-w-4xl w-full h-[90%] relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl font-bold"
        >
          &times;
        </button>
        <iframe
          src={resumeUrl}
          className="w-full h-full rounded-b-lg"
          title="Resume Preview"
        ></iframe>
      </div>
    </div>
  );
};

export default ResumeModal;
