import { StatusBar } from 'expo-status-bar';
import React, { useState,useEffect,useRef } from "react";
import {FlatList,TextInput, StyleSheet, Text, View, Pressable,Modal } from "react-native";
import useSWR from 'swr';
import axios from 'axios';

// Access your API key as an environment variable (see "Set up your API key" above)


export function DrugListScreen() {

  

  
//   const [recording, setRecording] = useState();
//   const [permissionResponse, requestPermission] = []//Audio.usePermissions();
//   const [recordUri,setrecordURI]=useState("")
const [drugList,setdrugList]=useState(false)
//   const [text, onChangeText] = useState('Useless Text');
//   const [qtext, onChangeqText] = useState('Question');
//   const [selectedDrug,setselectedDrug]=useState('');
//   const [modalvisible,setmodalvisible]=useState(false);
//   const [iaAnswer,setiaAnswer]=useState("");
//   const [buttoncolor,setbuttoncolor]=useState("gray")
  const respdata=useRef();
//   respdata.current=sessionStorage.getItem('drugdata') 
//   console.log(respdata.current)
  setTimeout(() => {  
    
    // respdata.current=sessionStorage.getItem('drugdata') 
    setdrugList(sessionStorage.getItem('drugdata') )
    console.log("drugList",drugList);  
     

}, 5000);

     

//   while(!respdata.current){
//     
  
//     console.log(respdata.current)
//   }

  
  
  return (
    
    <Wrapper>
      
        <FlatList
        data={JSON.parse(drugList)}
        renderItem={({item,index}) => 
        <Pressable onPressIn={()=>setselectedDrug(drugList[index].setid)} onPressOut={()=>_getDrugData(qtext)}
        style={styles.button.action}
        >
          <Text style={styles.item}>{item.title}</Text>
          </Pressable>}
          extraData={drugList}
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