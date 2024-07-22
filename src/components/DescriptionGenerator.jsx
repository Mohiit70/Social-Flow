import React from 'react';

const DescriptionGenerator = ({ onGenerate }) => {
  const handleClick = () => {
    const description = 'Generated description with AI.';
    onGenerate(description);
  };

  return (
    <div>
      <button onClick={handleClick}>Generate Description</button>
    </div>
  );
};

export default DescriptionGenerator;
