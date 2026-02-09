
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getAIPriceEstimation = async (description: string, condition: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `估算香港留学生二手市场价格。物品描述：${description}，成色：${condition}。请给出建议售价（港币HKD）和简短理由。`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            estimatedPrice: { type: Type.NUMBER },
            reasoning: { type: Type.STRING }
          },
          required: ["estimatedPrice", "reasoning"]
        }
      }
    });
    return JSON.parse(response.text);
  } catch (error) {
    console.error("AI Pricing Error:", error);
    return { estimatedPrice: 0, reasoning: "无法估价" };
  }
};

export const generateKnowledgeSummary = async (contentSnippet: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `这是一份大学课程笔记/资料。请生成一个50字以内的专业摘要：${contentSnippet}`,
    });
    return response.text;
  } catch (error) {
    console.error("AI Summary Error:", error);
    return "摘要生成失败";
  }
};
