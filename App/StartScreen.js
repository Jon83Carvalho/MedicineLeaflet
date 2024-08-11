import React, {  } from "react";
import {Text, View, Pressable,Image } from "react-native";
import { styles } from "./cssStyles";

// Access your API key as an environment variable (see "Set up your API key" above)


export function StartScreen({navigation}) {

  return (
    
    <Wrapper>
          <Image source={require('./assets/images/medleafleat.png')} style={{height:'20%',resizeMode:'contain'}}/>
          <Pressable
              style={[styles.button.navigation,{borderRadius:0,width:'100%',flex:0.1,justifyContent:'center'}]}
              onPress={() => navigation.navigate("Search Screen")}>
              <Text style={styles.textStyle.navigation}>Get your Medication information!</Text>
          </Pressable>
          <Text style={
            [{
            padding:10,
            width:'100%',
            flex:0.2,
            verticalAlign:'top',
            textAlign:'right',
            
            
            },
            styles.textStyle.subtitle_d
            ]}>Developed by: jonas.carvalho@gmail.com</Text>
     
      </Wrapper>
    
  );


}
const Wrapper = props =>{
  return (
    <View style={styles.container_start}>
      {props.children}
    </View>
  )
}
