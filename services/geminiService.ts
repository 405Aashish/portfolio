
import { GoogleGenAI, Type } from "@google/genai";
import { LifestyleGuide } from "../types";

// Always use process.env.API_KEY directly when initializing the client
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateLifestyleGuides = async (prompt: string): Promise<LifestyleGuide[]> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Generate 3 'Shinobi Lifestyle Scrolls' (high-school guides). Prompt context: ${prompt}. Each scroll should have a title (e.g., The Will of Fire Productivity), a category (e.g., Ninjutsu Training, Social Jutsu), 3 specific tips using Naruto metaphors, and a specific Naruto character who embodies this guide.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              title: { type: Type.STRING },
              category: { type: Type.STRING },
              tips: {
                type: Type.ARRAY,
                items: { type: Type.STRING }
              },
              animeReference: { type: Type.STRING, description: "The Naruto character who embodies this" }
            },
            required: ["title", "category", "tips", "animeReference"]
          }
        }
      }
    });

    // Access the text property directly from the response object
    const jsonStr = response.text || "[]";
    return JSON.parse(jsonStr);
  } catch (error) {
    console.error("Error generating lifestyle guides:", error);
    return [];
  }
};
