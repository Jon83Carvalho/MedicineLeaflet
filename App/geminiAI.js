import { documentReader } from "./documentReader";
const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.EXPO_PUBLIC_GEMINI_KEY);
var responseAI

export async function geminiAI(drugtext,q) {
    // The Gemini 1.5 models are versatile and work with both text-only and multimodal prompts
    if(q!='find'){  
    druginfo=documentReader(drugtext);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});
   
    const question=q
    const context=druginfo
    const prompt = 
    `Based on the drug documentation below:
    ${context}
    Start mentioning if the drug is used in humans or not and if can be used by children. Then, using a non-violent speach, fluid and direct language as you explaining to little knowldge people, answer the following question:
    ${question}
    And always include the exact name od the drug from the document in your answer.
    `
  
    const result = await model.generateContent(prompt);
   
    responseAI = result.response;
    //console.log("Resposta Prompt\n",responseAI)
    }
    else {
//////-----find suitable options for the drug name
        
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});
        // const model_embedded=genAI.getGenerativeModel({model: "text-embedding-004"})
        const question=q//"I am intolerant to LActose can I use this drug?"
        const context=drugtext
        const prompt = 
        `Suggest two medicine names based on misspeled name:
        ${context}
        The response must contain only a result in json format as (the word 'json' should not be in the response):
        {"response":{
          "name1":"<correct name>",
          "name2":"<correct mame>"
      }}

      where you substitute <correct name> by the two possible names of the medicine.
        `

        const result = await model.generateContent(prompt);
        // const result_emb=await model_embedded.embedContent(prompt);
        responseAI = result.response;
        
        // const embedding = result_emb.embedding;
        
       //,"Resposta embedded",embedding.values); 
//////+++++++++++++++++++++++++++++++++++++++++


    }
    const text = responseAI.text();
   // console.log("Resposta Prompt\n",JSON.parse(text))
    return text
  }
  