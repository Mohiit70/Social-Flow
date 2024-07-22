import React from 'react';

const UploadForm = ({ onImageUpload }) => {
  const handleChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      onImageUpload(file);
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleChange} />
    </div>
  );
};

export default UploadForm;
