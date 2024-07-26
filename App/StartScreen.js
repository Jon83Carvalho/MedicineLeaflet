import React, {  } from "react";
import {StyleSheet, Text, View, Pressable } from "react-native";
import { styles } from "./cssStyles";

// Access your API key as an environment variable (see "Set up your API key" above)


export function StartScreen({navigation}) {

  sessionStorage.removeItem('drugdata')

  return (
    
    <Wrapper>
     
          <Pressable
              style={styles.button.navigation}
              onPress={() => navigation.navigate("Search Screen")}>
              <Text>Get your Medication information!</Text>
          </Pressable>
     
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
