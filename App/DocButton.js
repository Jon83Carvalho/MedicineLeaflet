import React, { useState,useEffect } from "react";
import {FlatList,TextInput, StyleSheet, Text, View, Pressable,Modal } from "react-native";
import { Audio } from "expo-av";
import axios from 'axios';
import { geminiAI } from './geminiAI';
import useSWR from 'swr'; 


export const DocButton=({drugtext,druglist})=>{
    const [buttoncolor,setbuttoncolor]=useState("gray")
    var doc
    useEffect(()=>{
      console.log(doc)
    })
    
    
    const [drugList,setdrugList]=useState(false)
  

    
    function _getDoc(query){
        query=drugtext
      
          console.log("LocalHost","Query",query)

          query?
          doc=axios.get(`http://192.168.15.9:9000/?drug_name=${query}`
          ).catch((err) => {
            logger.error('Http error', err);
            error.logged = true;
            throw err;
          })
            .then((response) => response.data.data):
            doc=axios.get(`http://192.168.15.9:9000`
            ).catch((err) => {
              logger.error('Http error', err);
              error.logged = true;
              throw err;
            })
            .then((response) => {
              if (!response.ok) {
                console.log(`HTTP success ${response.status}`);
                
              }
              console.log("dados antes",response.data.data)
              setdrugList(doc)
              return response.data.data;
            })
        
        console.log("doc",doc)        
        setbuttoncolor("blue")
        
       
       }

       
       
       if(!drugList){
        return (
          <>
      <Pressable onPress={_getDoc} style={{backgroundColor:buttoncolor, borderRadius:8,padding:4}}>
      <Text>Carregar</Text>
      </Pressable>
</>
        )
       }
       const docdrug=drugList

        
    return (
<>
      <Pressable onPress={_getDoc} style={{backgroundColor:buttoncolor, borderRadius:8,padding:4}}>
      <Text>Pegar doc</Text>
      </Pressable>
</>
    )
}