import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ToneAnalyzer = () => {
  const [content, setContent] = useState('');
  const [tone, setTone] = useState(null);
  const [adjustedContent, setAdjustedContent] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const callGeminiAPI = async (prompt) => {
    const apiEndpoint = 'https://api.gemini.ai/v1/analyze';
    const apiKey = '';
  
    try {
      const response = await fetch(apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({ prompt })
      });
  
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error calling Gemini API:", error.message);
      alert(`Error: ${error.message}`);
      throw error;
    }
  };
  

  const analyzeTone = async () => {
    if (!content) return;

    setIsLoading(true);
    try {
      const prompt = `Analyze the tone of the following text: "${content}". Provide the detected tone and a confidence score between 0 and 1.`;
      const result = await callGeminiAPI(prompt);
      
      setTone({
        tone: result.tone,
        confidence: result.confidence
      });
    } catch (error) {
      console.error("Error analyzing tone:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const adjustTone = async (targetTone) => {
    if (!content) return;

    setIsLoading(true);
    try {
      const prompt = `Adjust the following text to a ${targetTone} tone: "${content}"`;
      const result = await callGeminiAPI(prompt);
      
      setAdjustedContent(result.adjustedText);
    } catch (error) {
      console.error("Error adjusting tone:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div 
      className="bg-gray-800 p-6 rounded-lg shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-2xl font-bold text-white mb-4">AI Tone Analyzer and Adjuster</h3>
      <textarea
        className="w-full p-2 rounded bg-gray-700 text-white mb-4"
        rows="4"
        placeholder="Enter your social media post here..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></textarea>
      <button 
        className={`bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition transform hover:scale-105 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
        onClick={analyzeTone}
        disabled={isLoading}
      >
        {isLoading ? 'Analyzing...' : 'Analyze Tone'}
      </button>
      {tone && (
        <div className="mt-4">
          <p className="text-white">Detected Tone: <span className="font-bold">{tone.tone}</span> (Confidence: {tone.confidence.toFixed(2)})</p>
          <div className="mt-2 space-x-2">
            {['professional', 'friendly', 'enthusiastic'].map((toneType) => (
              <button 
                key={toneType}
                className={`bg-${toneType === 'professional' ? 'green' : toneType === 'friendly' ? 'yellow' : 'purple'}-600 text-white px-4 py-2 rounded hover:bg-${toneType === 'professional' ? 'green' : toneType === 'friendly' ? 'yellow' : 'purple'}-700 transition transform hover:scale-105 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                onClick={() => adjustTone(toneType)}
                disabled={isLoading}
              >
                {isLoading ? 'Adjusting...' : `Make ${toneType.charAt(0).toUpperCase() + toneType.slice(1)}`}
              </button>
            ))}
          </div>
        </div>
      )}
      {adjustedContent && (
        <div className="mt-4">
          <h3 className="text-white font-bold mb-2">Adjusted Content:</h3>
          <p className="text-gray-300">{adjustedContent}</p>
        </div>
      )}
    </motion.div>
  );
};

export default ToneAnalyzer;