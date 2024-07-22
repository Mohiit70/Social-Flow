import React from 'react';

const PlatformSelector = ({ onPlatformSelect }) => {
  const platforms = ['Twitter', 'Instagram', 'LinkedIn'];

  const handlePlatformChange = (event) => {
    const { checked, value } = event.target;
    onPlatformSelect((prev) =>
      checked ? [...prev, value] : prev.filter((p) => p !== value)
    );
  };

  return (
    <fieldset className="mt-8">
      <legend className="sr-only">Select Platforms</legend>
      <div className="space-y-2">
        {platforms.map((platform, index) => (
          <label
            key={index}
            htmlFor={platform}
            className="flex cursor-pointer items-start gap-4"
          >
            <div className="flex items-center">
              <input
                type="checkbox"
                value={platform}
                className="size-4 rounded border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:ring-offset-gray-900"
                id={platform}
                onChange={handlePlatformChange}
              />
            </div>
            <div>
              <strong className="font-medium text-gray-900 dark:text-white">
                {platform}
              </strong>
            </div>
          </label>
        ))}
      </div>
    </fieldset>
  );
};

export default PlatformSelector;
