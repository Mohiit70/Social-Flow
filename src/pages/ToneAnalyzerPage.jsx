import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import ToneAnalyzer from '../components/ToneAnalyzer';

const ToneAnalyzerPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <Navbar />
      <div className="container mx-auto px-4 py-24 flex flex-col items-center">
        <motion.p 
          className="text-xl text-center text-gray-300 mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Refine your text's tone for better engagement
        </motion.p>
        
        <motion.div 
          className="w-full max-w-4xl mb-24"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <ToneAnalyzer />
        </motion.div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Why Use Our Tool?</h2>
          <div className="flex justify-center space-x-8">
            <div className="flex flex-col items-center">
              <svg className="w-12 h-12 mb-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <p className="text-lg">Accurate Analysis</p>
            </div>
            <div className="flex flex-col items-center">
              <svg className="w-12 h-12 mb-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" /></svg>
              <p className="text-lg">Customizable Suggestions</p>
            </div>
            <div className="flex flex-col items-center">
              <svg className="w-12 h-12 mb-2 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              <p className="text-lg">Instant Results</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ToneAnalyzerPage;
