import React from 'react'
import {View,Text,StyleSheet,Image,TextInput} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import {vw,vh, normalize} from '../dimension/dimension'

export default class Horizontal extends React.Component{
  render(){
    return(
          <LinearGradient colors={['rgb(1,167,163)','rgb(102,235,143)']} 
          style={[styles.linerColor,
            {height:vh(this.props.h)},
            {width:vw(this.props.w)},
            {borderRadius:(this.props.br)},
            {marginTop:vw(this.props.mtp)},
            {opacity:this.props.opacityOne?0.4:1}
          ]}
          start={{ y: 0.0, x: 0.0 }} end={{ y: 0.0, x: 1.0 }}
          >
              <Text style={styles.textTitle}>{this.props.name}</Text>
          </LinearGradient>
    )
  }
}

const styles=StyleSheet.create({
  linerColor:{
      alignItems:'center',
      justifyContent:'center'
  },
  textTitle:{
      fontSize:normalize(15),
      color:'white',
      fontWeight:'bold'
  }
})