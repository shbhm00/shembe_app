import React from 'react'
import {View,Text,StyleSheet,Image} from 'react-native'
import {vw,vh} from './src/dimension/dimension'
import SignIn from './src/screens/SignIn'
import CustomTextInput from './src/components/customTexInput'
import Home from './src/screens/Homescreen'
import Router from './src/screens/router'
import Modal from './src/components/modal'
import Timer from './src/screens/otpscreen'
import {persistor,store} from './src/store'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux';

export default class App extends React.Component{
  render(){
    return(
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}><Router/></PersistGate> 
      </Provider>
    )
  }
}
const styles=StyleSheet.create({
  container:{
    flex:1,
  },

})