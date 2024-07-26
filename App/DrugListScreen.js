import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import {FlatList,TextInput, Text, View, Pressable,Modal } from "react-native";
import axios from 'axios';
import { geminiAI } from './geminiAI';
import { styles } from './cssStyles';
import Markdown from 'react-native-markdown-display';


export function DrugListScreen({navigation}) {

const [drugList,setdrugList]=useState(false)
const [selectedDrug,setselectedDrug]=useState('');
const [qtext, onChangeqText] = useState('Question');
const [iaAnswer,setiaAnswer]=useState("");
const [modalvisible,setmodalvisible]=useState(false);
const [loadVisible,setloadVisible]=useState(true)


  setTimeout(() => {  
    
    setdrugList(sessionStorage.getItem('drugdata') )
    setloadVisible(false)

}, 2000);


async function _getDrugData(question){
  const query=selectedDrug
  console.log("Selected Drug id",selectedDrug)
  
  try {
    query?
    doc=await axios.get(`http://192.168.15.9:9000/spls/?setid=${query}`
    ).then((response) => response.data):
    doc=await axios.get(`http://192.168.15.9:9000`
    ).then((response) => response.data);
  } catch {
    query?
    doc=await axios.get(`http://localhost:9000/spls/?setid=${query}`
    ).then((response) => response.data):
    doc=await axios.get(`http://localhost:9000`
    ).then((response) => response.data);

  }
  const dataDoc = doc
  console.log(dataDoc)
  const ans = await geminiAI(dataDoc.data,question)
  console.log("resposta de IA",ans)
  setiaAnswer(ans)
  setmodalvisible(true)
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
          <Text>
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
          <Markdown>{iaAnswer}</Markdown>
          
          
            
          
          <Pressable
              style={styles.button.navigation}
              onPress={() => setmodalvisible(!modalvisible)}>
              <Text>Hide Modal</Text>
          </Pressable>
        </View>
        </Modal>
      <View style={styles.container_sub}>
      <Text>Searched Drug: {sessionStorage.getItem('drugname')}</Text>
      <Pressable style={styles.button.navigation}
              onPress={() =>{
                sessionStorage.removeItem('drugdata');
                navigation.navigate("Search Screen");}}>
              <Text>Back to Search</Text>
        
        </Pressable>
        
        <Text>Write your question below and select a medicine in the list:</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeqText}
        value={qtext}
      />
      </View>
        <Text>Medicine List:</Text>
        <FlatList
        style={styles.flatlist}
        data={JSON.parse(drugList)}
        renderItem={({item,index}) => 
        <Pressable onPressIn={()=>setselectedDrug(JSON.parse(drugList)[index].setid)} onPressOut={()=>_getDrugData(qtext)}
        style={styles.button.action}
        >
          <Text style={styles.item}>{item.title}</Text>
          </Pressable>}
          extraData={drugList}
          refreshing={!loadVisible}
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
