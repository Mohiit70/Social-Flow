import React, { useState } from 'react';
import Navbar from '../components/Navbar';

const TryItFree = () => {
  const [file, setFile] = useState(null);
  const [description, setDescription] = useState('');

  const handleFileChange = (event) => {
    setFile(URL.createObjectURL(event.target.files[0]));
  };

  const generateDescription = () => {
    // Placeholder for AI description generation
    setDescription('This is a generated description based on the uploaded image.');
  };

  return (
    <div className="relative h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      <Navbar />
      <div className="absolute top-0 z-[-2] h-screen w-screen"></div>
      <div className="flex flex-col items-center justify-center h-full text-center">
        <h1 className="text-5xl font-bold text-white">Try It Free</h1>
        <div className="mt-8">
          <input type="file" onChange={handleFileChange} className="text-white" />
          {file && <img src={file} alt="Preview" className="mt-4 max-w-xs sm:max-w-md" />}
          <div className="mt-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 mx-2">Twitter</button>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 mx-2">LinkedIn</button>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 mx-2">Instagram</button>
          </div>
          {file && (
            <div className="mt-4">
              <button onClick={generateDescription} className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700">Generate Description</button>
              {description && <p className="text-xl text-gray-300 mt-4">{description}</p>}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TryItFree;
