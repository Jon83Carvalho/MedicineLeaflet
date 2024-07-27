import {StyleSheet } from "react-native";
const colorspallet={
    medio:"#007f5a",
    claro:"#00dcbc",
    escuro:"#00dcbc",
    vermelhomedio:"#d50025",
    preto:"#d50025",
    branco:"#f1ecda00"
}
export const styles = StyleSheet.create({
    
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
      backgroundColor: colorspallet.branco,
      alignItems: "center",
      justifyContent: "center",
      flexDirection:"column"
    },
    container_sub:{
        flex: 0.5,
      backgroundColor: colorspallet.branco,
      alignItems: "center",
      justifyContent: "center",
    
    },
    flatlist:{
        flex: 5,
      backgroundColor: colorspallet.branco
    
    },
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      
    },
    
    textStyle:{
      default:{
        color:"#666666",
        fontWeight:'bold',
        fontSize:"12pt"
      },
      plaintext:{
        color:"#222222",
        fontWeight:'semibold',
        fontSize:"12pt",
        padding:10
      },
      title:{
        color:"#111111",
        fontWeight:'bold',
        fontSize:"16pt"
      },
      item: {
        color:"#222222",
        fontWeight:'bold',
        fontSize:"12pt"
      },
      navigation:{
        color:"#eeeeee",
        fontWeight:'bold',
        fontSize:"15pt"
      },
      action:{
        color:"#222222",
        fontWeight:'bold',
        fontSize:"12pt"

      }
    },
    button: {
      action:{
        fontSize:15,
        backgroundColor:colorspallet.claro,
        justifyContent:'center',
        margin: 5,
        borderRadius: 5,
        padding: 15,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0,
        shadowRadius: 4,
        elevation: 5,
  
      },
      navigation:{
        
        backgroundColor:colorspallet.medio,
        margin: 5,
        borderRadius: 5,
        padding: 15,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0,
        shadowRadius: 4,
        elevation: 5,
  
      }
    }
  });