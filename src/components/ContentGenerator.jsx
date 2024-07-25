import React, { useState } from 'react';
import axios from 'axios';

const ContentGenerator = ({ onGenerate }) => {
  const [ideas, setIdeas] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    try {

      const response = await axios.post('https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent', {
        contents: [{
          parts: [{
            text: `Generate content ideas based on these keywords: ${ideas}`
          }]
        }]
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.NEXT_PUBLIC_GEMINI_API_KEY}`
        },
        params: {
          key: process.env.NEXT_PUBLIC_GEMINI_API_KEY
        }
      });

      const generatedContent = response.data.candidates[0].content.parts[0].text;
      const generatedPrompts = generatedContent.split('\n').filter(prompt => prompt.trim() !== '');
      
      onGenerate(generatedPrompts);
    } catch (error) {
      console.error('Error generating content:', error);
      alert('Failed to generate content. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-neutral-950 p-6 rounded-lg shadow-lg mt-6">
      <h3 className="text-xl font-semibold text-white mb-4">Enter Your Ideas or Keywords:</h3>
      <input
        type="text"
        className="block w-full p-2 mb-4 bg-gray-800 text-white rounded-md"
        value={ideas}
        onChange={e => setIdeas(e.target.value)}
        placeholder="Type your ideas here, separated by commas..."
      />
      <button
        className="bg-blue-600 text-white px-6 py-3 rounded-full transition hover:bg-blue-700 disabled:bg-gray-500"
        onClick={handleGenerate}
        disabled={loading}
      >
        {loading ? 'Generating...' : 'Generate Prompts'}
      </button>
    </div>
  );
};

export default ContentGenerator;