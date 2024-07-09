import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Pressable,Image } from "react-native";
import { Audio } from "expo-av";
import axios from 'axios';
const { GoogleGenerativeAI } = require("@google/generative-ai");
import { documentReader } from './documentReader';

axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*'
// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(process.env.EXPO_PUBLIC_GEMINI_KEY);


export default function App() {
  
  const [recording, setRecording] = useState();
  const [permissionResponse, requestPermission] = Audio.usePermissions();
  const [recordUri,setrecordURI]=useState("")
  /////DailyMed API//////////////////======================
//   const url = 'https://dailymed.nlm.nih.gov/dailymed/services/v2/spls.json';
//   async function drugs (){
//   const {respo} = await axios.get(url,{
//     headers:{
//       'Cross-Origin-Opener-Policy':'same-origin',
//       'Access-Control-Allow-Origin':'https://dailymed.nlm.nih.gov/dailymed/services/v2/'
//     }
//   })

//     console.log("Drogas",respo)
// }
// drugs()

  //////++++++++++++++++++++++++++++++++++++++

druginfo=documentReader()



  ///////GEMINI API=====================================================================
  async function run() {
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

  run();


  ///////++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


  async function _startRecording() {
    try {
      if (permissionResponse.status !== 'granted') {
        console.log('Requesting permission..');
        await requestPermission();
      }
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
        
      });

      console.log('Starting recording..');
      const { recording } = await Audio.Recording.createAsync( Audio.RecordingOptionsPresets.HIGH_QUALITY
      );
      setRecording(recording);
      //console.log(navigator.mediaDevices.enumerateDevices())
      console.log('Recording started');
    } catch (err) {
      console.error('Failed to start recording', err);
    }
  }

   async function _stopRecording() {
    console.log('Stopping recording..');
    setRecording(undefined);
    await recording.stopAndUnloadAsync();
    await Audio.setAudioModeAsync(
      {
        allowsRecordingIOS: false,
      }
    );
    const uri = recording.getURI();
    setrecordURI(uri)
    console.log('Recording stopped and stored at', uri);

    

   }

   async function _playRecording(){
    if(recordUri) {
     
      const {sound} = await Audio.Sound.createAsync({uri:recordUri},{shouldPlay:true});

      await sound.setPositionAsync(0);
      console.log(recordUri,"tocando audio")
      await sound.playAsync();
    }
   }

   

    

    
  
  return (
    
    
    <View style={styles.container}>
      
      <Text>LeaFlet app</Text>

      <Pressable onPress={recording ? _stopRecording : _startRecording} style={{backgroundColor:'gray', borderRadius:8,padding:4}}>
      <Text>{recording ? 'Stop Recording' : 'Start Recording'}</Text>
      </Pressable>
      <Pressable onPress={_playRecording} style={{backgroundColor:'gray', borderRadius:8,padding:4}}>
      <Text>Tocar</Text>
      </Pressable>
           <StatusBar style="auto" />
           <Image
        
        source={""}
      />
    </View>
    
  );


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});