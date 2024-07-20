import { StatusBar } from 'expo-status-bar';
import React, { useState,useEffect } from "react";
import {FlatList,TextInput, StyleSheet, Text, View, Pressable,Modal } from "react-native";
import { Audio } from "expo-av";
import axios from 'axios';
import { geminiAI } from './geminiAI';
import { DocButton } from './DocButton';


// Access your API key as an environment variable (see "Set up your API key" above)


export default function App() {

  const [recording, setRecording] = useState();
  const [permissionResponse, requestPermission] = []//Audio.usePermissions();
  const [recordUri,setrecordURI]=useState("")
  const [drugList,setdrugList]=useState(false)
  const [text, onChangeText] = useState('Useless Text');
  const [qtext, onChangeqText] = useState('Question');
  const [selectedDrug,setselectedDrug]=useState('');
  const [modalvisible,setmodalvisible]=useState(false);
  const [iaAnswer,setiaAnswer]=useState("");
  const [buttoncolor,setbuttoncolor]=useState("gray")
  

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
  
      console.log("LocalHost","Query",query)
     
      query?
      doc=await axios.get(`http://192.168.15.9:9000/?drug_name=${query}`
      ).catch((err) => {
        logger.error('Http error', err);
        error.logged = true;
        throw err;
      })
        .then((response) => response.data.data):
        doc=await axios.get(`http://192.168.15.9:9000`
        ).catch((err) => {
          logger.error('Http error', err);
          error.logged = true;
          throw err;
        })
        .then((response) => {
          if (!response.ok) {
            console.log(`HTTP error: ${response.status}`);
          }
          return response.data;
        })
        .then((response) => response.data);
      
    
    
    const dataDoc = doc
    console.log("doc",dataDoc)        
    setbuttoncolor("blue")
    setdrugList(dataDoc)
    
   }
  
    
    async function _getDrugData(question){
    const query=selectedDrug
    console.log("Selected Drug id",selectedDrug)
    
    try {
      query?
      doc=await axios.get(`https://192.168.15.9:9000/spls/?setid=${query}`
      ).then((response) => response.data):
      doc=await axios.get(`https://192.168.15.9:9000`
      ).then((response) => response.data);
    } catch {
      query?
      doc=await axios.get(`http://localhost:9000/spls/?setid=${query}`
      ).then((response) => response.data):
      doc=await axios.get(`http://localhost:9000`
      ).then((response) => response.data);

    }
    const dataDoc = doc
    
    const ans = await geminiAI(dataDoc.data,question)
    console.log("resposta de IA",ans)
    setiaAnswer(ans)
    setmodalvisible(true)
   }
  // if(drugList){
  //   return <pre>...carregando</pre>
  // }


  return (
    
    <Wrapper>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalvisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setmodalVisible(!modalvisible);
        }}>
          <View style={styles.modalView}>
          <Text>
            {iaAnswer}
          </Text>
          <Pressable
              style={styles.button.action}
              onPress={() => setmodalvisible(!modalvisible)}>
              <Text>Hide Modal</Text>
          </Pressable>
        </View>
        </Modal>
      
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
      <Text>Pergunta:</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeqText}
        value={qtext}
      />
      <Pressable onPress={_getDoc} style={{backgroundColor:buttoncolor, borderRadius:8,padding:4}}>
      <Text>Pegar doc</Text>
      </Pressable>
      <DocButton
        drugtext={text}
        druglist={drugList}
      />
     
     
      <StatusBar style="auto" />
      <FlatList
        data={drugList}
        renderItem={({item,index}) => 
        <Pressable onPressIn={()=>setselectedDrug(drugList[index].setid)} onPressOut={()=>_getDrugData(qtext)}
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
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
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