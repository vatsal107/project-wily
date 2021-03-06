import React from "react";
import {Text,View,StyleSheet}from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
export default class TransactionScreen extends React.Component{

render(){
   return(
     <View style={styles.container}> 
<TouchableOpacity style ={styles.scanButton}>    
    <Text style={styles.buttonText}> 
Scan QR Code 
    </Text>
    </TouchableOpacity>    
     </View>
   )
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  displayText:{
    fontSize: 15,
    textDecorationLine: 'underline'
  },
  scanButton:{
    backgroundColor: '#2196F3',
    padding: 10,
    margin: 10
  },
  buttonText:{
    fontSize: 20,
  }
});
