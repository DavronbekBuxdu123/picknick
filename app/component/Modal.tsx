// components/Modal.js
import React from "react";

export default function Modal({ show, onClose, children }) {
  if (!show) return null;

  return (
    <div className="fixed inset-0 backdrop-blur-xs  flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl max-w-[500px] w-[90%] p-6 shadow-lg relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-xl font-bold text-gray-500 hover:text-black"
        >
          ×
        </button>
        {children}
      </div>
    </div>
  );
}
