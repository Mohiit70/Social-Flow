import React from 'react';

const DescriptionGenerator = ({ onGenerate }) => {
  const generateDescription = async () => {
    const prompt = "Draft a compelling social media post that is engaging, has a human tone, uses emojis, and includes relevant hashtags. The post should promote a new coffee shop opening in town.";

    const requestBody = {
      contents: [
        {
          parts: [
            {
              text: prompt,
            },
          ],
        },
      ],
    };

    try {
      const response = await fetch(
        // api will added
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(requestBody),
        }
      );

      if (!response.ok) {
        throw new Error(`Failed to generate description: ${response.statusText}`);
      }

      const data = await response.json();
      console.log('API Response:', data);

      const description = data.candidates?.[0]?.text ?? "No description available.";
      console.log('Extracted Description:', description);
      onGenerate(description);
    } catch (error) {
      console.error('Error generating description:', error);
      onGenerate("Error generating description.");
    }
  };

  return (
    <div className="mt-8 flex justify-center">
      <button
        onClick={generateDescription}
        className="p-3 bg-blue-500 rounded hover:bg-blue-600 transition text-lg font-medium"
      >
        Generate Description
      </button>
    </div>
  );
};

export default DescriptionGenerator;
