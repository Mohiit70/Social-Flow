import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import ToneAnalyzer from '../components/ToneAnalyzer';

const ToneAnalyzerPage = () => {
  return (
    <div className="relative min-h-screen w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      <Navbar />

      <div className="container mx-auto px-4 py-20">
        <motion.h1 
          className="text-4xl lg:text-6xl leading-tight text-white mb-6 text-center"
          style={{ fontFamily: "'__GeistSans_3a0388', '__GeistSans_Fallback_3a0388', sans-serif", fontWeight: 400 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          AI-Powered Tone Analysis
        </motion.h1>
        <motion.p 
          className="mb-12 text-center"
          style={{ fontFamily: "'__GeistSans_3a0388', '__GeistSans_Fallback_3a0388', sans-serif", fontSize: '18px', lineHeight: '28px', fontWeight: 400, color: 'rgb(179, 188, 197)' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Analyze and adjust the tone of your social media posts for better engagement
        </motion.p>

        <ToneAnalyzer />

        <motion.div 
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-2xl lg:text-4xl leading-tight text-white mb-6 text-center">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-white mb-2">1. Enter Your Text</h3>
              <p className="text-gray-300">Paste your social media post or content into the text area.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-white mb-2">2. Analyze Tone</h3>
              <p className="text-gray-300">Our AI will analyze the tone of your content and provide insights.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-white mb-2">3. Adjust as Needed</h3>
              <p className="text-gray-300">Use our AI to adjust the tone to better suit your audience and goals.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ToneAnalyzerPage;