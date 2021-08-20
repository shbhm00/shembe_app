import React from 'react'
import {View,Text,StyleSheet,Image,TextInput} from 'react-native'
import {vw,vh} from '../dimension/dimension'

export default class Custom extends React.Component{
    state= {
        isFocused: false
    }

     handleFocus = () => this.setState({isFocused: true})
    
     handleBlur = () => {this.setState({isFocused: false});this.props.onBlur}
  render(){
    return(
      <View style={styles.container}>
          <TextInput
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          style={[styles.input,{
            borderColor: this.state.isFocused
                ? 'rgb(1,167,163)'
                : 'transparent',
            borderWidth: 1}]}
          placeholder={this.props.Name}
          secureTextEntry={this.props.secure}
          value={this.props.value}
          onChangeText={this.props.onChangeText}
          placeholderTextColor='rgb(140,140,140)'
          keyboardType={this.props.keyboardType}
          />
      </View>
    )
  }
}

const styles=StyleSheet.create({
  input:{
      height:vh(45),
      width:vw(315),
      paddingLeft:vw(15),
      backgroundColor:'#e9eaea',
      paddingTop:vh(15),
      paddingBottom:vh(16),
      paddingRight:vw(101.5),
      borderRadius:(5),
      marginTop:vh(5)
  }
})