import React, { useState } from 'react';

const PlatformSelector = ({ onPlatformSelect }) => {
  const [selectedPlatforms, setSelectedPlatforms] = useState([]);

  const platforms = ['Twitter', 'Instagram', 'LinkedIn'];

  const handleChange = (platform) => {
    const newSelection = selectedPlatforms.includes(platform)
      ? selectedPlatforms.filter((p) => p !== platform)
      : [...selectedPlatforms, platform];

    setSelectedPlatforms(newSelection);
    onPlatformSelect(newSelection);
  };

  return (
    <div>
      {platforms.map((platform) => (
        <label key={platform}>
          <input
            type="checkbox"
            value={platform}
            checked={selectedPlatforms.includes(platform)}
            onChange={() => handleChange(platform)}
          />
          {platform}
        </label>
      ))}
    </div>
  );
};

export default PlatformSelector;
