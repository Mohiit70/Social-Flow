import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import UploadForm from '../components/ UploadForm';
import PlatformSelector from '../components/ PlatformSelector';
import DescriptionGenerator from '../components/DescriptionGenerator';
import { resizeImage } from '../utils/resizeImage';

const TryItFree = () => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [selectedPlatforms, setSelectedPlatforms] = useState([]);
  const [resizedImages, setResizedImages] = useState([]);

  const handleImageUpload = (file) => {
    setUploadedImage(file);
  };

  const handlePlatformSelect = (platforms) => {
    setSelectedPlatforms(platforms);
  };

  const handleGenerateDescription = (description) => {
    // Logic to handle description
    console.log('Generated description:', description);
  };

  const handleImageResize = async () => {
    if (uploadedImage && selectedPlatforms.length > 0) {
      const resizedImages = await Promise.all(
        selectedPlatforms.map((platform) => resizeImage(uploadedImage, platform))
      );
      setResizedImages(resizedImages);
    }
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Try It Free</h1>
        <UploadForm onImageUpload={handleImageUpload} />
        <PlatformSelector onPlatformSelect={handlePlatformSelect} />
        <DescriptionGenerator onGenerate={handleGenerateDescription} />
        <button
          onClick={handleImageResize}
          className="mt-4 p-2 bg-blue-500 rounded hover:bg-blue-600 transition"
        >
          Resize Images
        </button>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {resizedImages.map((image, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={URL.createObjectURL(image)}
                alt={`Resized for ${selectedPlatforms[index]}`}
                className="max-w-full h-auto rounded shadow"
              />
              <p className="mt-2 text-sm text-gray-400">{selectedPlatforms[index]}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TryItFree;
