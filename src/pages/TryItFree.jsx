import React, { useState, useCallback } from 'react';
import UploadForm from '../components/ UploadForm';
import PlatformSelector from '../components/ PlatformSelector';
import DescriptionGenerator from '../components/DescriptionGenerator';
import DescriptionModal from '../components/DescriptionModal';
import { resizeImage } from '../utils/resizeImage';

const createDownloadLink = (image, platform) => {
  const url = URL.createObjectURL(image);
  const link = document.createElement('a');
  link.href = url;
  link.download = `resized_${platform}.png`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

const TryItFree = () => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [selectedPlatforms, setSelectedPlatforms] = useState([]);
  const [resizedImages, setResizedImages] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [generatedPost, setGeneratedPost] = useState('');

  const handleImageUpload = useCallback((file) => {
    setUploadedImage(file);
  }, []);

  const handlePlatformSelect = useCallback((platforms) => {
    setSelectedPlatforms(platforms);
  }, []);

  const handleGenerateDescription = useCallback((description) => {
    console.log('Generated description:', description);
    setGeneratedPost(description);
  }, []);

  const handleImageResize = useCallback(async () => {
    if (uploadedImage && selectedPlatforms.length > 0) {
      const resizedImages = await Promise.all(
        selectedPlatforms.map((platform) => resizeImage(uploadedImage, platform))
      );
      setResizedImages(resizedImages);
    }
  }, [uploadedImage, selectedPlatforms]);

  const handleDownloadImage = useCallback((image, platform) => {
    createDownloadLink(image, platform);
  }, []);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleDescriptionSubmit = async (description) => {
    console.log('Submitting description:', description);
  };

  const imageCards = resizedImages.map((image, index) => (
    <div
      key={index}
      className="flex flex-col items-center p-4 rounded-lg bg-gray-800 shadow-md"
    >
      <img
        src={URL.createObjectURL(image)}
        alt={`Resized for ${selectedPlatforms[index]}`}
        className="max-w-full h-auto rounded cursor-pointer"
        onClick={() => handleDownloadImage(image, selectedPlatforms[index])}
      />
      <p className="mt-4 text-base text-gray-400 text-center">
        {selectedPlatforms[index]}
      </p>
    </div>
  ));

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <div className="container mx-auto px-4 py-16 flex flex-col items-center">
        <h1 className="text-4xl font-bold text-center mb-12">Try It Free</h1>
        <div className="max-w-xl w-full">
          <UploadForm onImageUpload={handleImageUpload} />
          <PlatformSelector onPlatformSelect={handlePlatformSelect} />
          <DescriptionGenerator onGenerate={handleGenerateDescription} />
          <button
            onClick={handleImageResize}
            className="mt-8 w-full p-3 bg-blue-500 rounded hover:bg-blue-600 transition text-lg font-medium"
          >
            See The Magic ✨
          </button>
          <button
            onClick={handleOpenModal}
            className="mt-4 w-full p-3 bg-green-500 rounded hover:bg-green-600 transition text-lg font-medium"
          >
            Write a Description 📝
          </button>
        </div>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl">
          {imageCards}
        </div>
        {generatedPost && (
          <div className="mt-8 p-4 bg-gray-800 rounded">
            <h2 className="text-lg font-semibold mb-2">Generated Social Media Post:</h2>
            <p>{generatedPost}</p>
          </div>
        )}
      </div>
      <DescriptionModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleDescriptionSubmit}
      />
    </div>
  );
};

export default TryItFree;