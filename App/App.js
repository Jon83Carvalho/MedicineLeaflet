import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { Audio } from "expo-av";
import { useMediaDevices } from "react-media-devices";
import * as FileSystem from 'expo-file-system';
const { GoogleGenerativeAI } = require("@google/generative-ai");

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(process.env.EXPO_PUBLIC_GEMINI_KEY);

console.log(process.env.EXPO_PUBLIC_GEMINI_KEY)


export default function App() {
  
  const [recording, setRecording] = useState();
  const [permissionResponse, requestPermission] = Audio.usePermissions();
  const [recordUri,setrecordURI]=useState("")
  

  ///////GEMINI API=====================================================================
  async function run() {
  // The Gemini 1.5 models are versatile and work with both text-only and multimodal prompts
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});

  const prompt = "Write a story about a magic backpack."

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  console.log(text);
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