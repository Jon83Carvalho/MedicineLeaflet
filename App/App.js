import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { Audio } from "expo-av";
import { useMediaDevices } from "react-media-devices";
import * as FileSystem from 'expo-file-system';


export default function App() {
  
  const [recording, setRecording] = useState();
  const [permissionResponse, requestPermission] = Audio.usePermissions();
  //const { devices } = useMediaDevices();

  // // similar to componentDidMount and componentDidUpdate
  // useEffect(() => {
  //   _askForPermissions();
  // });

  // async function _askForPermissions() {
  //   const response = await Permissions.askAsync(Permissions.AUDIO_RECORDING);
  //   setAllowRecord(response.status);
  // }

  // let currentRecordingStatus;
  async function _startRecording() {
    try {
      if (permissionResponse.status !== 'granted') {
        console.log('Requesting permission..');
        await requestPermission();
      }
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });

      console.log('Starting recording..');
      const { recording } = await Audio.Recording.createAsync( Audio.RecordingOptionsPresets.HIGH_QUALITY
      );
      setRecording(recording);
      //console.log(navigator.mediaDevices.enumerateDevices())
      console.log('Recording started');
    } catch (err) {
      console.error('Failed to start recording', err);
    }
  }

   async function _stopRecording() {
    console.log('Stopping recording..');
    setRecording(undefined);
    await recording.stopAndUnloadAsync();
    await Audio.setAudioModeAsync(
      {
        allowsRecordingIOS: false,
      }
    );
    const uri = recording.getURI();
  
    console.log('Recording stopped and stored at', uri);

    // Create a file name for the recording
    const fileName = `recording-${Date.now()}.caf`;

    // Move the recording to the new directory with the new file name
    await FileSystem.makeDirectoryAsync(FileSystem.documentDirectory + 'recordings/', { intermediates: true });
    await FileSystem.moveAsync({
      from: uri,
      to: FileSystem.documentDirectory + 'recordings/' + `${fileName}`
});

   }

   

    

    
  
  return (
    
      
    <View style={styles.container}>
      
      <Text>LeaFlet app</Text>

      <Pressable onPress={recording ? _stopRecording : _startRecording} style={{backgroundColor:'gray', borderRadius:8,padding:4}}>
      <Text>{recording ? 'Stop Recording' : 'Start Recording'}</Text>
      </Pressable>
           <StatusBar style="auto" />
    </View>
    
  );

  // return (
  //   <View style={styles.container}>
  //     <Text>Open up App.tsx to start working on your app!</Text>

  //     <Button title="start record" onPress={_startRecording} />
  //     <Button title="stop record" onPress={_stopRecording} />

  //     <View>
  //       <Text>Recording permission: {true} </Text>
  //       <Text style={{ fontSize: 15 }}>
  //         Can record: 
  //       </Text>
  //       <Text>Is recording: </Text>
  //       <Text>
  //         Is done recording: 
  //       </Text>
  //       <Text>Recording time: </Text>
  //     </View>

  //     <StatusBar style="auto" />
  //   </View>
  // );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});