import React, {  } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SearchScreen } from './SearchScreen';
import { DrugListScreen } from './DrugListScreen';
import { StartScreen } from "./StartScreen";
import { SearchScreenTeste } from "./SearchScreenTest";





// Access your API key as an environment variable (see "Set up your API key" above)


export default function App() {

sessionStorage.removeItem('drugname');
sessionStorage.removeItem('drugdata');
sessionStorage.removeItem('sugestion');

const RootStack = createNativeStackNavigator();



  return (
 
  <NavigationContainer >
  <RootStack.Navigator screenOptions={{headerShown:false}} initialRouteName="MedLeaFleet">
  <RootStack.Screen
      name="Start Screen" 
      component={StartScreen}
      option={{title: 'MedLeaFleat Agent'}}
    />
    <RootStack.Screen
      name="Search Screen" 
      component={SearchScreen}
      option={{title: 'MedLeaFleat Agent'}}
    />
    
    <RootStack.Screen
            name="Drug List" 
            component={DrugListScreen}
            option={{title: 'MedLeaFleat Agent'}}
    />
    </RootStack.Navigator> 
</NavigationContainer>
  
  );
 }



