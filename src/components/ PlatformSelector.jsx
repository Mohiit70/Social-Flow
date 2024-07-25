import React from 'react';

const PlatformSelector = ({ onPlatformSelect }) => {
  const platforms = ['Twitter', 'Instagram', 'LinkedIn', 'Facebook'];

  const handlePlatformChange = (event) => {
    const { checked, value } = event.target;
    onPlatformSelect((prev) =>
      checked ? [...prev, value] : prev.filter((p) => p !== value)
    );
  };

  return (
    <fieldset className="mt-8">
      <legend className="text-lg font-semibold mb-4">Select Platforms</legend>
      <div className="grid grid-cols-2 gap-4">
        {platforms.map((platform, index) => (
          <label
            key={index}
            htmlFor={platform}
            className="flex cursor-pointer items-center gap-2 rounded-md border border-gray-600 p-3 hover:bg-gray-700 transition-colors"
          >
            <input
              type="checkbox"
              value={platform}
              className="h-4 w-4 rounded border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:ring-offset-gray-900"
              id={platform}
              onChange={handlePlatformChange}
            />
            <span className="text-sm font-medium text-gray-300">{platform}</span>
          </label>
        ))}
      </div>
    </fieldset>
  );
};

export default PlatformSelector;