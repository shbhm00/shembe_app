import React from 'react'
import {View,Text,StyleSheet,Image,TextInput,TouchableOpacity} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import {vw,vh} from '../dimension/dimension'
import Gradient from './horizontal'
import box from '../assets/icCheckUnselected.png'
import Checked_box from '../assets/icCheckSelected.png'

export default class Checkbox extends React.Component{

    state={
        Box:box,
        checked:true
    }
    active_pass = () => {
        if (this.state.Box == box) {
          this.setState({ Box:Checked_box})
        } else {
          this.setState({ Box:box});
        }
      };
  render(){
    return(
        <TouchableOpacity style={styles.button} onPress={()=>{this.props.check(this.active_pass())}}>
            <Image source={this.state.Box}/>
        </TouchableOpacity>
    )
  }
}

const styles=StyleSheet.create({
  linerColor:{
  }
})