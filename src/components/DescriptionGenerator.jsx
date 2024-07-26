import React from 'react';
import axios from 'axios';

const DescriptionGenerator = ({ onGenerate, userDescription }) => {
  const generateDescription = async () => {
    const prompt = `Draft a compelling social media post based on the following user description: "${userDescription}". The post should be engaging, have a human tone, use emojis, and include relevant hashtags.`;

    try {
      const response = await axios({
        url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${
          import.meta.env.VITE_API_GENERATIVE_LANGUAGE_CLIENT
        }`,
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        data: {
          contents: [
            {
              parts: [
                {
                  text: prompt,
                },
              ],
            },
          ],
        },
      });

      const data = response.data;
      console.log('API Response:', JSON.stringify(data, null, 2));

      if (data && data.candidates && data.candidates.length > 0) {
        const candidate = data.candidates[0];
        console.log('First Candidate:', JSON.stringify(candidate, null, 2));
        const description = candidate.content?.parts?.[0]?.text || 'No description found';
        console.log('Extracted Description:', description);
        onGenerate(description);
      } else {
        console.warn('No candidates found in the response:', JSON.stringify(data, null, 2));
        onGenerate('No description available.');
      }
    } catch (error) {
      console.error('Error generating description:', error);
      onGenerate('Error generating description.');
    }
  };

  return (
    <div className="mt-8 flex justify-center">
      <button
        onClick={generateDescription}
        className="p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-colors duration-300 text-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1"
        disabled={!userDescription}
      >
        Generate AI Description
      </button>
    </div>
  );
};

export default DescriptionGenerator;
