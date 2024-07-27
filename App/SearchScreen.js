import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import {TextInput, Text, View, Pressable,Modal } from "react-native";
import { Audio } from "expo-av";
import axios from 'axios';
import { styles } from './cssStyles';

import { geminiAI } from './geminiAI';



export function SearchScreen({navigation}) {

  const [recording, setRecording] = useState();
  const [permissionResponse, requestPermission] = []//Audio.usePermissions();
  const [recordUri,setrecordURI]=useState("")
  const [text, onChangeText] = useState('Type the name of the drug');
  const [loadVisible,setloadVisible]=useState(false)
  const [sugnVis,setsugnVis]=useState(false);
  const [sugName1,setsugName1]=useState('');
  const [sugName2,setsugName2]=useState('');
  
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
   

   function _getDoc(query){
    query=text
    sessionStorage.setItem('drugname',query)

      query?
      doc=axios.get(`http://192.168.15.9:9000/?drug_name=${query}`
      ).catch((err) => {
        logger.error('Http error', err);
        error.logged = true;
        throw err;
      })
        .then((response) => {

          sessionStorage.setItem('drugdata',JSON.stringify(response.data.data))
          setloadVisible(false)
          
        }):
        doc=axios.get(`http://192.168.15.9:9000`
        ).catch((err) => {
          logger.error('Http error', err);
          error.logged = true;
          throw err;
        })
        .then((response) => {
          if (!response.ok) {
            console.log(`HTTP success: ${response.status}`);
            
            sessionStorage.setItem('drugdata',JSON.stringify(response.data.data))
            setloadVisible(false)
          }
          return JSON.stringify(response.data.data);
        });
      
    setTimeout(() => {  
      const drugdata=sessionStorage.getItem('drugdata')
      if(drugdata=='[]'){
        geminiAI(query,'find').then((res)=>{
        sessionStorage.setItem('sugestion',res)
        setsugName1(JSON.parse(res).response.name1)
        setsugName2(JSON.parse(res).response.name2)
        setloadVisible(false)
        setsugnVis(true)
        
      });
      
      } else{
        
        navigation.navigate("Drug List")
      }
    
    }, 5000);
    
   }
    
  return (
    
    <Wrapper>
      <Modal
        animationType="none"
        transparent={true}
        visible={loadVisible}
        onRequestClose={() => {
          setloadVisible(!loadvisible);
        }}>
          <View style={styles.modalView}>
          <Text style={styles.textStyle.action}>
            Loading ...
          </Text>
        </View>
        </Modal>  
      
      <Modal
        animationType="none"
        transparent={true}
        visible={sugnVis}
        onRequestClose={() => {
          setsugnVis(!sugnVis);
        }}>
          <View style={[styles.modalView,{flexDirection:'column'}]}>
          <Text style={styles.textStyle.plaintext}>We haven't found "{text}", click the button below that you identify the correct:</Text>
          <View style={{flexDirection:'row'}}>
          <Pressable style={[styles.button.action,{visibility:sugName1==text?'hidden':''}]} onPress={()=>{
            onChangeText(sugName1);
            setsugnVis(!sugnVis)
            }}>
          <Text style={styles.textStyle.action}>{sugName1}</Text>
          </Pressable>
          <Pressable style={[styles.button.action,{visibility:(sugName1==sugName2||sugName2==text)?'hidden':''}]} onPress={()=>{
            onChangeText(sugName2);
            setsugnVis(!sugnVis)
            }}>
          <Text style={styles.textStyle.action}>{sugName2}</Text>
          </Pressable>
          </View>
          <Pressable
              style={styles.button.navigation}
              onPress={() => setsugnVis(!sugnVis)}>
              <Text style={styles.textStyle.navigation}>Hide this.</Text>
          </Pressable>
        </View>
        </Modal>  
      
      <Text style={styles.textStyle.title}>MedLeaFleet App</Text>
      
      <Pressable onPress={recording ? _stopRecording : _startRecording} style={[styles.button.navigation,{visibility:'hidden'}]}>
      <Text>{recording ? 'Stop Recording' : 'Start Recording'}</Text>
      </Pressable>
      <Pressable onPress={_playRecording} style={[styles.button.navigation,{visibility:'hidden'}]}>
      <Text style={styles.btext}>Tocar</Text>
      </Pressable>
      <TextInput
        style={[styles.input,styles.textStyle.default]}
        onChangeText={onChangeText}
        onFocus={()=>{
          if(text=='Type the name of the drug'){onChangeText('')}
        }}
        value={text}
      />
     <Pressable onPress={_getDoc} onPressOut={()=>setloadVisible(true)} style={styles.button.navigation}>
      <Text style={styles.textStyle.navigation}>Collect medicine data</Text>
      </Pressable>
     
      <StatusBar style="auto" />
      
    
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
