import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub, faReddit } from '@fortawesome/free-brands-svg-icons';

const AnimatedLogo = () => {
  const orbitRadius = 120; // Adjust this value to change the orbit size
  const iconSize = "2rem";
  
  const orbitingIcons = [
    { icon: faTwitter, color: "#1DA1F2", angle: 0 },
    { icon: faGithub, color: "#6e5494", angle: 72 },
    { icon: faReddit, color: "#FF4500", angle: 144 },
    // Add more icons as needed, adjusting the angle for even distribution
  ];

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <h1 className="text-4xl mb-8">Collect data from any website on the internet</h1>
      <div className="relative w-96 h-96">
        <motion.div
          className="absolute inset-0 bg-blue-500 rounded-full opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <img
          src="/path-to-your-logo.png" // Replace with your actual logo path
          alt="Central Logo"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24"
        />
        {orbitingIcons.map((item, index) => (
          <motion.div
            key={index}
            className="absolute top-1/2 left-1/2"
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              width: `${orbitRadius * 2}px`,
              height: `${orbitRadius * 2}px`,
              transform: `rotate(${item.angle}deg)`,
            }}
          >
            <FontAwesomeIcon
              icon={item.icon}
              className="absolute"
              style={{
                color: item.color,
                fontSize: iconSize,
                left: `${orbitRadius - parseInt(iconSize) / 2}px`,
                top: `-${parseInt(iconSize) / 2}px`,
              }}
            />
          </motion.div>
        ))}
      </div>
      <p className="mt-8 text-gray-400">...and bring it into your second brain.</p>
    </div>
  );
};

export default AnimatedLogo;