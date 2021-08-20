import React from 'react'
import {View,Text,StyleSheet,Image,TextInput,TouchableOpacity} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import {vw,vh} from '../dimension/dimension'
import Gradient from './horizontal'

export default class Button extends React.Component{
  render(){
    return(
        <TouchableOpacity style={styles.button}
        disabled={this.props.disabled}
        onPress={()=>{console.log(this.props.onPress);this.props.onPress()}}
        activeOpacity={this.props.active}
        >
            <Gradient
            h={40}
            w={315}
            name="Submit"
            br={5}
            mtp={25}
            opacityOne={this.props.disabled}
            />
        </TouchableOpacity>
    )
  }
}

const styles=StyleSheet.create({
  linerColor:{
  }
})