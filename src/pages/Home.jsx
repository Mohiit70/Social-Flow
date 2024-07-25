import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Home = () => {
  const features = [
    { title: "AI-Powered Content", description: "Generate engaging posts with our advanced AI.", icon: "🤖" },
    { title: "Analytics Dashboard", description: "Track your social media performance in real-time.", icon: "📊" },
    { title: "Multi-Platform Support", description: "Manage all your social accounts in one place.", icon: "🌐" },
    { title: "Automated Scheduling", description: "Plan your content calendar effortlessly.", icon: "🗓️" },
    { title: "Engagement Tracking", description: "Monitor and boost your audience interactions.", icon: "👥" },
    { title: "Custom Branding", description: "Maintain your brand identity across all posts.", icon: "🎨" },
  ];

  return (
    <div className="relative min-h-screen w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      <Navbar />

      <div className="container mx-auto px-4 py-20 flex flex-col items-center justify-center min-h-screen">
        <div className="text-center max-w-3xl">
          <motion.h1
            className="text-4xl lg:text-6xl leading-tight text-white mb-6"
            style={{ fontFamily: "'__GeistSans_3a0388', '__GeistSans_Fallback_3a0388', sans-serif", fontWeight: 400 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            The AI-Powered Solution for Developers
          </motion.h1>
          <motion.p
            className="mb-8"
            style={{ fontFamily: "'__GeistSans_3a0388', '__GeistSans_Fallback_3a0388', sans-serif", fontSize: '18px', lineHeight: '28px', fontWeight: 400, color: 'rgb(179, 188, 197)' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Seamlessly Create and Customize Your Social Media Posts with Minimal Effort
          </motion.p>
          <motion.div
            className="flex justify-center space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link to="/try-it-free" className="relative inline-block bg-blue-600 text-white px-6 py-3 rounded-full overflow-hidden group transition transform hover:scale-105">
              <span className="relative z-10">Create Posts</span>
              <div className="absolute inset-0 bg-blue-700 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            </Link>
            <Link to="/how-it-works" className="relative inline-block bg-transparent border border-white text-white px-6 py-3 rounded-full overflow-hidden group transition transform hover:scale-105">
              <span className="relative z-10">Content Calendar</span>
              <div className="absolute inset-0 bg-gray-700 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            </Link>
            <Link to="/tone-analyzer" className="relative inline-block bg-indigo-600 text-white px-6 py-3 rounded-full overflow-hidden group transition transform hover:scale-105">
              <span className="relative z-10">AI Tone Analyzer</span>
              <div className="absolute inset-0 bg-indigo-700 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            </Link>
          </motion.div>
        </div>
      </div>

      <section className="py-16 px-4 bg-gray-900" id="features">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="text-3xl font-bold sm:text-4xl text-white mb-12 text-center" style={{ fontFamily: "'__GeistSans_3a0388', '__GeistSans_Fallback_3a0388', sans-serif" }}>
            Powerful Features for Social Media Success
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 p-6 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-blue-400 text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4" id="about">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold sm:text-4xl text-white mb-4" style={{ fontFamily: "'__GeistSans_3a0388', '__GeistSans_Fallback_3a0388', sans-serif" }}>
                About Social Flow
              </h2>
              <p className="text-gray-400" style={{ fontFamily: "'__GeistSans_3a0388', '__GeistSans_Fallback_3a0388', sans-serif" }}>
                Social Flow is a cutting-edge AI-powered platform designed to revolutionize social media management for developers. Our innovative solution streamlines the process of creating, customizing, and scheduling posts across multiple platforms, allowing you to focus on what matters most - building great software.
              </p>
              <Link
                to="https://github.com/Mohiit70/Social-Flow"
                className="mt-8 inline-block rounded bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-blue-700 focus:outline-none focus:ring focus:ring-yellow-400"
                style={{ fontFamily: "'__GeistSans_3a0388', '__GeistSans_Fallback_3a0388', sans-serif" }}
              >
                Learn More About Us
              </Link>
            </motion.div>
            <motion.div
              className="relative h-64 lg:h-full"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="/img/About.png"
                alt="About Social Flow"
                className="rounded-lg shadow-xl object-cover w-full h-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-blue-600">
        <div className="max-w-screen-xl mx-auto text-center">
          <h2 className="text-3xl font-bold sm:text-4xl text-white mb-4" style={{ fontFamily: "'__GeistSans_3a0388', '__GeistSans_Fallback_3a0388', sans-serif" }}>
            Ready to Supercharge Your Social Media?
          </h2>
          <p className="text-white mb-8" style={{ fontFamily: "'__GeistSans_3a0388', '__GeistSans_Fallback_3a0388', sans-serif" }}>
            Join thousands of developers who are already using Social Flow to streamline their social media management.
          </p>
          <Link
            to="/try-it-free"
            className="inline-block rounded bg-white text-blue-600 px-12 py-3 text-sm font-medium transition hover:bg-gray-100 focus:outline-none focus:ring focus:ring-yellow-400 transform hover:scale-105"
            style={{ fontFamily: "'__GeistSans_3a0388', '__GeistSans_Fallback_3a0388', sans-serif" }}
          >
            Get Started Now
          </Link>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Social Flow</h3>
              <p className="text-sm text-gray-400">Empowering developers with AI-driven social media management.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="#features" className="text-sm text-gray-400 hover:text-white">Features</Link></li>
                <li><Link to="/tone-analyzer" className="text-sm text-gray-400 hover:text-white">Tone Analyzer</Link></li>
                <li><Link to="#about" className="text-sm text-gray-400 hover:text-white">About Us</Link></li>
                <li><Link to="https://github.com/Mohiit70/Social-Flow" className="text-sm text-gray-400 hover:text-white">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <a href="https://github.com/Mohiit70/Social-Flow" className="text-gray-400 hover:text-white transition transform hover:scale-110"><FontAwesomeIcon icon={faFacebook} /></a>
                <a href="https://x.com/MohitB_twt" className="text-gray-400 hover:text-white transition transform hover:scale-110"><FontAwesomeIcon icon={faTwitter} /></a>
                <a href="https://github.com/Mohiit70/Social-Flow" className="text-gray-400 hover:text-white transition transform hover:scale-110"><FontAwesomeIcon icon={faInstagram} /></a>
                <a href="https://www.linkedin.com/in/mohit-bisht-22ab5b256/" className="text-gray-400 hover:text-white transition transform hover:scale-110"><FontAwesomeIcon icon={faLinkedin} /></a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <p className="text-sm text-gray-400">&copy; 2024 Social Flow. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;