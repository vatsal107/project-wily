import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createBottomTabNavigator}from "react-navigation-tabs"
import{createAppContainer}from "react-navigation"
import TransactionScreen from './screens/booktransactionscreen';
import SearchScreen from './screens/searchscreen';


export default class App extends React.Component {
  render(){
    return (
      <View style={styles.container}>
       <AppContainer/>
      </View>
    );
  }


}

const tabNavigator=createBottomTabNavigator({
Transaction:{screen:TransactionScreen},
Search:{screen:SearchScreen}
})

const AppContainer=createAppContainer(tabNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
