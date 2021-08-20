import React, { useState, useRef, useEffect } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import CustomTexInput from '../components/customTexInput'
import { vh, vw, normalize } from '../dimension/dimension'
import Gradient from '../components/horizontal'
import SignIn from './SignIn'
import { Formik } from 'formik';
import * as yup from 'yup';
import RoundButton from '../components/roundButton'
import Forgot from './forgot'
import Eye from '../components/eyeButton'

export default class Reset extends React.Component {
    state={
        eye_enable:true,
        pass:''
    }
    reviewShcema = yup.object({
        password: yup.string()
            .required('No password provided.')
            .min(8, 'Password is too short (8 char min)')
            .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
    });
    render() {
        
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('Forgot')}>
                    <Image style={styles.crossImage} source={require('../assets/ic-back-btn.png')} />
                </TouchableOpacity>
                <View style={styles.subcontainer}>
                    <View style={styles.otpTimer}>
                        <Text style={styles.forgot}>Reset Password</Text>
                    </View>
                    <Gradient
                        h={5}
                        w={25}
                        br={2}
                        mtp={5}
                    />
                    <Text style={styles.para}>Please set a new password for your account</Text>
                    <Formik
                    initialValues={{password:''}}
                    validationSchema={this.reviewShcema}
                    >
                        {props=>(
                    <View>
                    <View style={styles.inputField}>
                        <CustomTexInput
                            Name="Create Password"
                            secure={this.state.eye_enable}
                            onChangeText={props.handleChange('password')}
                            onBlur={props.handleBlur('password')}
                        />
                    </View>
                    <Text style={styles.errortext}>
                                    {props.touched.password && props.errors.password}
                    </Text>
                    <View>
                        <Eye
                        height={-45}
                        right={0}
                        active={(y)=>this.setState({eye_enable:y})}
                        />
                    </View>
                    <View style={styles.Button}><RoundButton 
                    onPress={()=>(props.touched.password && props.errors.password===undefined)?this.props.navigation.navigate('SignIn'):props.handleSubmit()}
                    /></View>
                    </View>
                    )}
                    </Formik>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    otpTimer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    timerText: {
        fontSize: vh(14),
        color: 'rgb(45,190,123)',
        marginTop: vh(8),
        fontWeight: '700',
        marginLeft: vw(20),
        fontSize: 20,
    },
    crossImage: {
        marginTop: vh(32),
        left: vw(15)
    },
    subcontainer: {
        marginLeft: normalize(30),
        marginRight: normalize(30),
        marginTop: normalize(48)
    },
    forgot: {
        fontSize: normalize(25),
        fontWeight: '800'

    },
    para: {
        marginTop: vh(15),
        fontSize: vh(15),
        color: 'rgb(89,89,89)'
    },
    inputField: {
        marginTop: vh(25)
    },
    Button: {
        left: vw(259),

    },
    errortext:{
        color:'red',
        left:vw(30),
        marginTop:vh(2)
    }
})





        