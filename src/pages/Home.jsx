import React from 'react';
import Header from '../components/Header';

const Home = () => {
  const handleImageUpload = (file) => {
    console.log('Uploaded file:', file);
  };

  return (
    <div>
      <Header />
      <main>
        <h1>Welcome to Social Flow</h1>
        <p>Upload your images and let AI handle the rest!</p>
        <ImageUpload onUpload={handleImageUpload} />
      </main>
    </div>
  );
};

export default Home;
