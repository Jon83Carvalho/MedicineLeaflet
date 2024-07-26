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
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
    button: {
      action:{
        fontSize:15,
        backgroundColor:colorspallet.claro,
        margin: 10,
        borderRadius: 5,
        padding: 5,
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
      navigation:{
        fontSize:18,
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
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
  
      }
    }
  });