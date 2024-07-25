import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ToneAnalyzer = () => {
  const [content, setContent] = useState('');
  const [analysis, setAnalysis] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  

  const callGeminiAPI = async (prompt) => {
    const apiEndpoint = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent';
    const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;

    try {
      const response = await fetch(`${apiEndpoint}?key=${apiKey}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: prompt
            }]
          }]
        })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data.candidates[0].content.parts[0].text;
    } catch (error) {
      console.error("Error calling Gemini API:", error);
      throw error;
    }
  };

  const analyzeTone = async () => {
    if (!content.trim()) return;

    setIsLoading(true);
    try {
      const prompt = `
        Analyze the tone of the following text and provide feedback:
        "${content}"
        
        Please structure your response as follows:
        1. Overall tone
        2. Key tonal elements
        3. Suggestions for improvement
        4. Grammar corrections (if any)
        
        Keep your response concise and easy to understand.
      `;

      const result = await callGeminiAPI(prompt);
      setAnalysis(result);
    } catch (error) {
      console.error("Error analyzing tone:", error);
      setAnalysis("Sorry, we encountered an error while analyzing your text. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div
      className="max-w-2xl mx-auto p-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-xl font-bold text-white mb-4 text-center">Analyze Your Text</h2>
      <textarea
        className="w-full p-3 rounded bg-gray-700 text-white mb-4 focus:ring-2 focus:ring-blue-500 transition"
        rows="4"
        placeholder="Type or paste your text here..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></textarea>
      <div className="flex justify-center">
        <button
          className={`bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
          onClick={analyzeTone}
          disabled={isLoading}
        >
          {isLoading ? 'Analyzing...' : 'Analyze Tone'}
        </button>
      </div>
      {analysis && (
        <motion.div
          className="mt-6 bg-gray-700 p-4 rounded-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-lg font-semibold text-white mb-2">Analysis Results:</h3>
          <p className="text-gray-200 whitespace-pre-line">{analysis}</p>
        </motion.div>
      )}
    </motion.div>
  );
};

export default ToneAnalyzer;