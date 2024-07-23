import React from 'react';

const DescriptionGenerator = ({ onGenerate }) => {
  const generateDescription = () => {
    const description = 'This is a generated description using AI.';
    onGenerate(description);
  };

  return (
    <div className="mt-8 flex justify-center">
      <button
        onClick={generateDescription}
        className="p-3 bg-blue-500 rounded hover:bg-blue-600 transition text-lg font-medium"
      >
        Generate Description
      </button>
    </div>
  );
};

export default DescriptionGenerator;