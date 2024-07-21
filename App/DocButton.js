import React, { useState,useRef } from "react";
import {Text, Pressable } from "react-native";
import axios from 'axios';
import useSWR from 'swr'; 


export function DocButton({drugtext,navigation}){
    const [buttoncolor,setbuttoncolor]=useState("gray")
    const [drugList,setdrugList]=useState(false)
  
  
    function _getDoc(query){
        query=drugtext
      
        

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
         
              sessionStorage.setItem('drugdata',JSON.stringify(response.data.data));
              setdrugList(doc)
              return response.data.data;
            })
        
        
        setbuttoncolor("blue")
       
       
       }

       
       

    return (
<>
      <Pressable onPress={_getDoc} style={{backgroundColor:buttoncolor, borderRadius:8,padding:4}}>
      <Text>Pegar doc</Text>
      </Pressable>
</>
    )
}