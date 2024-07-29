import { StatusBar } from 'expo-status-bar';
import React, { useState,useRef } from "react";
import {FlatList,TextInput, Text, View, Pressable,Modal } from "react-native";
import axios from 'axios';
import { geminiAI } from './geminiAI';
import { styles } from './cssStyles';
import Markdown from 'react-native-markdown-display';


export function SearchScreenTeste({navigation}) {

const [drugList,setdrugList]=useState(false)

const [selectedDrug,setselectedDrug]=useState('');
const [qtext, onChangeqText] = useState('');
const [iaAnswer,setiaAnswer]=useState("");
const [modalvisible,setmodalvisible]=useState(false);
const [loadVisible,setloadVisible]=useState(true)
const [alertVisible,setalertVisible]=useState(false)

async function meddata() {
  
    const ddata=await axios.get(`http://192.168.15.9:9000`)
      return ddata.data.data

      }
 


async function _getDrugData(question){
  const query=selectedDrug
    
  try {
    
    doc=await axios.get(`http://192.168.15.9:9000/spls/?setid=${query}`
    ).then((response) => {
     
      return  response.data
    })
    
  } catch {
    
    doc=await axios.get(`http://localhost:9000/spls/?setid=${query}`
    ).then((response) => {
      
      return response.data
    })
    
  }
  const dataDoc = doc
  
  const ans = await geminiAI(dataDoc.data,question)
  
  setiaAnswer(ans)
  
  setmodalvisible(true)
 }
meddata().then(res=>setdrugList(JSON.stringify(res)))

 setTimeout(() => {  
 
  console.log("FOI TIMEOUT")
  setloadVisible(false)
  
}, 1000);
 
 if(!drugList){
  return <pre>carregando</pre>
 } 
 
   return (
    
    <Wrapper>
      <Modal
        animationType="none"
        transparent={true}
        visible={alertVisible}
        onRequestClose={() => {
          setalertVisible(!alertVisible);
        }}>
          <View style={styles.modalView}>
          <Text style={styles.textStyle.action}>
            Write a question about the medicine.
          </Text>
          <Pressable
              style={styles.button.navigation}
              onPress={() => setalertVisible(!alertVisible)}>
              <Text style={styles.textStyle.navigation}>OK</Text>
          </Pressable>
        </View>
        </Modal>
      
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
        animationType="fade"
        transparent={true}
        visible={modalvisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setmodalVisible(!modalvisible);
        }}>
          <View style={styles.modalView}>
          <Text style={styles.textStyle.action}>Find below the answer to your question:</Text>
          <Markdown>{iaAnswer}</Markdown>
          
          <Pressable
              style={styles.button.navigation}
              onPress={() => setmodalvisible(!modalvisible)}>
              <Text style={styles.textStyle.navigation}>OK</Text>
          </Pressable>
        </View>
        </Modal>
        <Text style={styles.textStyle.title}>MedLeaFleet App</Text>
      <View style={styles.container_sub}>
      <Text style={styles.textStyle.plaintext}>Searched Drug: {sessionStorage.getItem('drugname')}</Text>
      <Pressable style={styles.button.navigation}
              onPress={() =>{
                sessionStorage.removeItem('drugdata');
                navigation.navigate("Search Screen");}}>
              <Text style={styles.textStyle.navigation}>Back to Search</Text>
        
        </Pressable>
        
        <Text style={styles.textStyle.plaintext}>Write your question below and select a medicine in the list:</Text>
      <TextInput
        style={[styles.input,styles.textStyle.plaintext]}
        onChangeText={onChangeqText}
        value={qtext}
      />
      </View>
        <Text style={styles.textStyle.plaintext}>Medicine List -Click on the medicine name to see the answer to your question-:</Text>
        <FlatList
        style={styles.flatlist}
        data={JSON.parse(drugList)}
        renderItem={({item,index}) => 
        <Pressable onPressIn={()=>setselectedDrug(JSON.parse(drugList)[index].setid)} onPressOut={()=>{
          if(qtext!=''){
          _getDrugData(qtext);
          setloadVisible(true);
          } else {
            setalertVisible(true)
          }
        }}
        style={styles.button.action}
        >
          <Text style={styles.textStyle.item}>{item.title}</Text>
          </Pressable>}
          extraData={drugList}
          refreshing={loadVisible}
      />
     
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
