import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import {TextInput, StyleSheet, Text, View, Pressable } from "react-native";
import { Audio } from "expo-av";
import axios from 'axios';
const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.EXPO_PUBLIC_GEMINI_KEY);


export async function geminiAI(druginfo) {
    // The Gemini 1.5 models are versatile and work with both text-only and multimodal prompts
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});
   // const model_embedded=genAI.getGenerativeModel({model: "text-embedding-004"})
    const question="I am intolerant to LActose can I use this drug?"
    const context=druginfo
    const prompt = 
    `Based on the drug documentation below:
    ${context}
    Using a fluid and direct language as you maybe talking to an elder person, answer the following question:
    ${question}
    `
  
    const result = await model.generateContent(prompt);
   // const result_emb=await model_embedded.embedContent(prompt);
    const response = await result.response;
   // const embedding = result_emb.embedding;
    const text = response.text();
    console.log("Resposta Prompt\n",text)//,"Resposta embedded",embedding.values);
  
  }
  