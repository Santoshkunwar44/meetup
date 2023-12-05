const { OpenAI } = require("openai");

const generateImage = async (prompt, numberOfImages, imageSize) => {
  const openai = new OpenAI({
    apiKey:"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",
  });

  try {
    const imageGeneration = await openai.images.generate({
      prompt: prompt,
      n: numberOfImages,
      size: imageSize,
    });
    return imageGeneration;
  } catch (error) {
    console.error("Error generating image:", error);
    throw error;
  }
};

module.exports = { generateImage };
