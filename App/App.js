import { StatusBar } from 'expo-status-bar';
import React, { useState,useEffect } from "react";
import {FlatList,TextInput, StyleSheet, Text, View, Pressable,Modal } from "react-native";
import { Audio } from "expo-av";
import axios from 'axios';
import { geminiAI } from './geminiAI';
import { DocButton } from './DocButton';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SearchScreen } from './SearchScreen';
import { DrugListScreen } from './DrugListScreen';





// Access your API key as an environment variable (see "Set up your API key" above)


export default function App() {

  

const RootStack = createNativeStackNavigator();



  return (
 
  <NavigationContainer>
  <RootStack.Navigator screenOptions={{headerShown:false}} initialRouteName="MedLeaFleet">
    <RootStack.Screen
      name="Search Screen" 
      component={SearchScreen}
    />
    <RootStack.Screen
            name="Drug List" 
            component={DrugListScreen}
    />
    </RootStack.Navigator> 
</NavigationContainer>
  


  );


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