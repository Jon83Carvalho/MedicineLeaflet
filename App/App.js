import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import {FlatList,TextInput, StyleSheet, Text, View, Pressable } from "react-native";
import { Audio } from "expo-av";
import axios from 'axios';
import { documentReader } from './documentReader';
import { geminiAI } from './geminiAI';


// Access your API key as an environment variable (see "Set up your API key" above)


export default function App() {
  
  const [recording, setRecording] = useState();
  const [permissionResponse, requestPermission] = Audio.usePermissions();
  const [recordUri,setrecordURI]=useState("")
  const [drugList,setdrugList]=useState([{}])
  const [text, onChangeText] = useState('Useless Text');
  const [selectedDrug,setselectedDrug]=useState('');
  

// druginfo=documentReader()



  ///////GEMINI API=====================================================================
//   async function GeminiAI(druginfo) {
//   // The Gemini 1.5 models are versatile and work with both text-only and multimodal prompts
//   const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});
//  // const model_embedded=genAI.getGenerativeModel({model: "text-embedding-004"})
//   const question="I am intolerant to LActose can I use this drug?"
//   const context=druginfo
//   const prompt = 
//   `Based on the drug documentation below:
//   ${context}
//   Using a fluid and direct language as you maybe talking to an elder person, answer the following question:
//   ${question}
//   `

//   const result = await model.generateContent(prompt);
//  // const result_emb=await model_embedded.embedContent(prompt);
//   const response = await result.response;
//  // const embedding = result_emb.embedding;
//   const text = response.text();
//   //console.log("Resposta Prompt\n",text)//,"Resposta embedded",embedding.values);

// }



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

   async function _getDoc(query){
    query=text
    
    console.log(query)
    
    query?
    doc=await axios.get(`http://localhost:9000/?drug_name=${query}`).then((response) => response.data.data):
    doc=await axios.get(`http://localhost:9000`).then((response) => response.data.data);

    
    const dataDoc = doc
    
    
    setdrugList(dataDoc)
    
   }



   async function _getDrugData(query){
    query=selectedDrug
    console.log("Selected Drug id",selectedDrug)
    
    query?
    doc=await axios.get(`http://localhost:9000/spls/?setid=${query}`).then((response) => response.data):
    doc=await axios.get(`http://localhost:9000`).then((response) => response.data);

    
    const dataDoc = doc
   
    geminiAI(dataDoc.data)
    
   }

    

    
  
  return (
    
    
    <Wrapper>
      
      <Text>LeaFlet app</Text>

      <Pressable onPress={recording ? _stopRecording : _startRecording} style={{backgroundColor:'gray', borderRadius:8,padding:4}}>
      <Text>{recording ? 'Stop Recording' : 'Start Recording'}</Text>
      </Pressable>
      <Pressable onPress={_playRecording} style={{backgroundColor:'gray', borderRadius:8,padding:4}}>
      <Text>Tocar</Text>
      </Pressable>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        
        
        
      />
      <Pressable onPress={_getDoc} style={{backgroundColor:'gray', borderRadius:8,padding:4}}>
      <Text>Pegar doc</Text>
      </Pressable>
     
     
      <StatusBar style="auto" />
      <FlatList
        data={drugList}
        renderItem={({item,index}) => 
        <Pressable onPressIn={()=>setselectedDrug(drugList[index].setid)} onPressOut={_getDrugData}
        style={styles.button.action}
        >
          <Text style={styles.item}>{item.title}</Text>
          </Pressable>}
      />
    
      </Wrapper>
    
  );


}
const Wrapper = props =>{
  return (
    <View style={styles.container}>
      {props.children}
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  button: {
    action:{
      backgroundColor:'lightblue',
       borderRadius:8,
       padding:4
      }
  }
});