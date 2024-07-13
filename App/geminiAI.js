import { documentReader } from "./documentReader";
const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.EXPO_PUBLIC_GEMINI_KEY);


export async function geminiAI(drugtext) {
    // The Gemini 1.5 models are versatile and work with both text-only and multimodal prompts
    druginfo=documentReader(drugtext);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});
   // const model_embedded=genAI.getGenerativeModel({model: "text-embedding-004"})
    const question="I am intolerant to LActose can I use this drug?"
    const context=druginfo
    const prompt = 
    `Based on the drug documentation below:
    ${context}
    Using brazilian portuguese language and a fluid and direct language as you maybe talking to an elder person, answer the following question:
    ${question}
    And always include the exact name od the drug from the document in your answer.
    `
  
    const result = await model.generateContent(prompt);
   // const result_emb=await model_embedded.embedContent(prompt);
    const response = await result.response;
   // const embedding = result_emb.embedding;
    const text = response.text();
    console.log("Resposta Prompt\n",text)//,"Resposta embedded",embedding.values);
  
  }
  