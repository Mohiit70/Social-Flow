import React, { useState } from 'react';

const DescriptionModal = ({ isOpen, onClose, onSubmit }) => {
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(description);
    setDescription('');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white text-black p-6 rounded shadow-md w-11/12 md:w-1/3">
        <h2 className="text-xl font-bold mb-4">Write a Short Description</h2>
        <form onSubmit={handleSubmit}>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Write your description here..."
            className="w-full h-32 p-2 border rounded mb-4"
            required
          />
          <div className="flex justify-end">
            <button type="button" onClick={onClose} className="mr-2 text-gray-500">
              Cancel
            </button>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DescriptionModal;