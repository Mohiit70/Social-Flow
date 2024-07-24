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
  const [userDescription, setUserDescription] = useState('');

  const handleImageUpload = useCallback((file) => {
    setUploadedImage(file);
  }, []);

  const handlePlatformSelect = useCallback((platforms) => {
    setSelectedPlatforms(platforms);
  }, []);

  const handleGenerateDescription = useCallback((description) => {
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
    setUserDescription(description);
    setIsModalOpen(false);
  };

  const imageCards = resizedImages.map((image, index) => (
    <div
      key={index}
      className="flex flex-col items-center p-4 rounded-lg bg-gray-800 shadow-md hover:shadow-lg transition-all duration-300"
    >
      <img
        src={URL.createObjectURL(image)}
        alt={`Resized for ${selectedPlatforms[index]}`}
        className="max-w-full h-auto rounded cursor-pointer hover:opacity-80 transition-opacity duration-300"
        onClick={() => handleDownloadImage(image, selectedPlatforms[index])}
      />
      <p className="mt-4 text-base text-gray-400 text-center">
        {selectedPlatforms[index]}
      </p>
    </div>
  ));

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-950 to-gray-900 text-white font-sans">
      <div className="container mx-auto px-4 py-16 flex flex-col items-center">
        <h1 className="text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
          Try Social Flow Free
        </h1>
        <div className="max-w-xl w-full space-y-8 bg-gray-800 p-8 rounded-lg shadow-lg">
          <UploadForm onImageUpload={handleImageUpload} />
          <PlatformSelector onPlatformSelect={handlePlatformSelect} />
          <button
            onClick={handleOpenModal}
            className="w-full py-2 px-4 bg-gradient-to-r from-green-400 to-blue-500 rounded-md hover:from-green-500 hover:to-blue-600 transition text-sm font-medium shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            Write a Description 📝
          </button>
          <DescriptionGenerator onGenerate={handleGenerateDescription} userDescription={userDescription} />
          <button
            onClick={handleImageResize}
            className="w-full py-2 px-4 bg-gradient-to-r from-purple-400 to-pink-500 rounded-md hover:from-purple-500 hover:to-pink-600 transition text-sm font-medium shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            See The Magic ✨
          </button>
        </div>
        {resizedImages.length > 0 && (
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl">
            {imageCards}
          </div>
        )}
        {generatedPost && (
          <div className="mt-8 p-6 bg-gray-800 rounded-lg shadow-lg w-full max-w-2xl">
            <h2 className="text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              Generated Social Media Post:
            </h2>
            <p className="text-gray-300 leading-relaxed">{generatedPost}</p>
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