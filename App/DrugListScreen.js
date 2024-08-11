import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import {FlatList,TextInput, Text, View, Pressable,Modal,ScrollView,Image} from "react-native";
import axios from 'axios';
import { geminiAI } from './geminiAI';
import { styles } from './cssStyles';
import Markdown from 'react-native-markdown-display';


export function DrugListScreen({route,navigation}) {

const [drugList,setdrugList]=useState(false);
const [qtext, onChangeqText] = useState('');
const [iaAnswer,setiaAnswer]=useState("");
const [modalvisible,setmodalvisible]=useState(false);
const [loadVisible,setloadVisible]=useState(true)
const [alertVisible,setalertVisible]=useState(false)

const {data_drug,dname}=route.params;

  setTimeout(() => {  
    
    setdrugList(data_drug)
    setloadVisible(false)

}, 2000);


async function _getDrugData(question,drugid){
  const query=drugid
    
  try {
    
    doc=await axios.get(`https://www.datandart.com:9000/spls/?setid=${query}`
    ).then((response) => {
     
      return  response.data
    })
    
  } catch {
    
    doc=await axios.get(`https://www.datandart.com:9000/spls/?setid=${query}`
    ).then((response) => {
      
      return response.data
    })
    
  }
  const dataDoc = doc
  
  const ans = await geminiAI(dataDoc.data,question)
  
  setiaAnswer(ans)
  
  setmodalvisible(true)
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
          <View style={{height:"100%",justifyContent:'center'}}>
          <View style={styles.modalView}>
          <Text style={styles.textStyle.action}>
            Loading ...
          </Text>
        </View>
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
          <View style={[styles.modalView_answer,{height:'80%'}]}>
          <ScrollView style={styles.modalView_scroll}>
          <Text style={styles.textStyle.action}>Find below the answer to your question:</Text>
          <Markdown>{iaAnswer}</Markdown>
        </ScrollView>
        <Pressable
              style={styles.button.navigation}
              onPress={() => setmodalvisible(!modalvisible)}>
              <Text style={styles.textStyle.navigation}>OK</Text>
          </Pressable>
        </View>
        </Modal>
        <Image source={require('./assets/images/medleafleat.png')} style={{height:'10%',resizeMode:'contain'}}/>
      <View style={styles.container_sub}>
        
        
        
      <View style={{flexDirection:'row',alignContent:'space-around'}}>
      
          <Pressable style={styles.button.back}
                  onPress={() =>{
                  
                    navigation.navigate("Search Screen");}}>
                  <Text style={styles.textStyle.back}>Back to Search</Text>
            
            </Pressable>
            <Text style={styles.textStyle.plaintext}>Searched Drug: {dname}</Text>
        </View>
      <Text style={styles.textStyle.plaintext}>Write your question below and select a medicine in the list:</Text>
      <TextInput
        style={[styles.input,styles.textStyle.plaintext]}
        onChangeText={onChangeqText}
        value={qtext}
      />
      <Text style={styles.textStyle.subtitle}>Medicine List</Text>
      <Text style={[styles.textStyle.plaintext,{textAlign:'center'}]}>-Click on the medicine name to see the answer to your question-:</Text>
      </View>
        
        <FlatList
        style={styles.flatlist}
        data={JSON.parse(drugList)}
        renderItem={({item,index}) => 
        <Pressable onPress={()=>{
          if(qtext!=''){
          _getDrugData(qtext,JSON.parse(drugList)[index].setid);
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
