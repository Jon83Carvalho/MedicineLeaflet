import React, {  } from "react";
import {StyleSheet } from "react-native";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SearchScreen } from './SearchScreen';
import { DrugListScreen } from './DrugListScreen';
import { StartScreen } from "./StartScreen";
import { styles } from "./cssStyles";





// Access your API key as an environment variable (see "Set up your API key" above)


export default function App() {

sessionStorage.removeItem('drugname');
sessionStorage.removeItem('drugdata');

const RootStack = createNativeStackNavigator();



  return (
 
  <NavigationContainer >
  <RootStack.Navigator screenOptions={{headerShown:false}} initialRouteName="MedLeaFleet">
  <RootStack.Screen
      name="Start Screen" 
      component={StartScreen}
    />
    <RootStack.Screen
      name="Search Screen" 
      component={SearchScreen}
    />
    <RootStack.Screen
            name="Drug List" 
            component={DrugListScreen}
            option={{title: 'Drug List'}}
    />
    </RootStack.Navigator> 
</NavigationContainer>
  
  );
 }



