import React from 'react'
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { vw, vh } from '../dimension/dimension'
import Gradient from './horizontal'

export default class RoundButton extends React.Component {
    render() {
        return (
            <View>
                <TouchableOpacity style={styles.button}
                    onPress={this.props.onPress}
                    disabled={this.props.disabled}
                    activeOpacity={this.props.active}
                >
                    <Gradient
                        h={56}
                        w={56}
                        name=""
                        br={50}
                        mtp={28}
                        opacityOne={this.props.disabled}
                    />
                <View style={styles.btnImageCon}>
                    <Image style={styles.btnImage} source={require('../assets/right-arrow.png')} />
                </View>
                </TouchableOpacity>
            </View>

        )
    }
}
const styles = StyleSheet.create({
    linerColor: {
    },
    btnImage:{
        width:vw(21),
        height:vh(21)
    },
    btnImageCon:{
        position:'absolute',
        top:vh(45),
        left:vw(18)
    }
})