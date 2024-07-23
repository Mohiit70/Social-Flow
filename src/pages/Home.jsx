import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const FeatureCard = ({ title, description, icon }) => (
  <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
    <div className="text-blue-400 text-3xl mb-4">{icon}</div>
    <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
    <p className="text-gray-300">{description}</p>
  </div>
);

const Home = () => {
  return (
    <div className="relative min-h-screen w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      <Navbar />
      <div className="absolute top-0 z-[-2] h-full w-full"></div>
      
      <div className="container mx-auto px-4 py-20 flex items-center justify-center min-h-screen">
        <div className="text-center max-w-3xl">
          <h1 
            className="text-4xl lg:text-6xl leading-tight text-white mb-6"
            style={{
              fontFamily: "'__GeistSans_3a0388', '__GeistSans_Fallback_3a0388', sans-serif",
              fontWeight: 400,
              fontStyle: 'normal',
              fontVariant: 'normal',
              textTransform: 'none',
              textDecoration: 'none',
              textIndent: '0px',
            }}
          >
            The AI-Powered Solution for Developers
          </h1>
          <p 
            className="mb-8"
            style={{
              fontFamily: "'__GeistSans_3a0388', '__GeistSans_Fallback_3a0388', sans-serif",
              fontSize: '18px',
              lineHeight: '28px',
              fontWeight: 400,
              fontStyle: 'normal',
              fontVariant: 'normal',
              textTransform: 'none',
              textDecoration: 'none',
              textIndent: '0px',
              verticalAlign: 'baseline',
              letterSpacing: 'normal',
              wordSpacing: '0px',
              color: 'rgb(179, 188, 197)'
            }}
          >
            Seamlessly Create and Customize Your Social Media Posts with Minimal Effort
          </p>
          <div className="flex justify-center space-x-4">
            <Link to="/try-it-free" className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700">Try It Free</Link>
            <Link to="/how-it-works" className="bg-transparent border border-white text-white px-6 py-3 rounded-full hover:bg-gray-700">How It Works</Link>
          </div>
        </div>
      </div>
      
      <section id="features" className="py-16 px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-12">Our Features</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard 
            title="Real-time Analytics" 
            description="Get instant insights into your social media performance with our real-time analytics dashboard."
            icon="📊"
          />
          <FeatureCard 
            title="Sentiment Analysis" 
            description="Understand your audience's emotions and reactions with our advanced sentiment analysis tools."
            icon="😃"
          />
          <FeatureCard 
            title="Competitor Tracking" 
            description="Stay ahead of the game by monitoring your competitors' social media strategies and performance."
            icon="🔍"
          />
          <FeatureCard 
            title="Automated Reporting" 
            description="Save time with our automated reporting feature, delivering comprehensive insights straight to your inbox."
            icon="📈"
          />
        </div>
      </section>
    </div>
  );
};

export default Home;