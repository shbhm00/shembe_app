import React, { useState, useRef, useEffect } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import CustomTexInput from '../components/customTexInput'
import { Form, Formik } from 'formik';
import * as yup from 'yup';
import { vh, vw, normalize } from '../dimension/dimension'
import Gradient from '../components/horizontal'
import SignIn from './SignIn'
import RoundButton from '../components/roundButton'
import Forgot from './forgot'
import Reset from './resetPass'

export default class Otp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            timer: 20,
        }
    }

    reviewShcema = yup.object({
        otp: yup.string()
            .required()
            .matches(/^[0-9]+$/, "Must be only digits")
            .min(5, 'Must be exactly 5 digits')
            .max(5, 'Must be exactly 5 digits'),
    });
    abcd=()=>{
        if( props.touched.otp && props.errors.otp!=undefined)
        {
            props.handleSubmit()
        }
        else
        {
            this.props.navigation.navigate('Reset')
        }
    }
    countDown = () => {
        if (this.state.timer == 0) {
            clearInterval(this.a);
        }
        else {
            this.setState({ timer: this.state.timer - 1 })
        }
    }
    a = setInterval(this.countDown, 1000)


    abc = () => {
        this.setState({ timer: 20 })
        setInterval(this.countDown, 1000)
    }
    render() {

        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Forgot')}>
                    <Image style={styles.crossImage} source={require('../assets/ic-back-btn.png')} />
                </TouchableOpacity>
                <View style={styles.subcontainer}>
                    <View style={styles.otpTimer}>
                        <Text style={styles.forgot}>OTP Verification</Text>
                    </View>
                    <Gradient
                        h={5}
                        w={25}
                        br={2}
                        mtp={5}
                    />
                    <Text style={styles.para}>Please enter the 6 digit verification code sent to
you on</Text>
                    <Formik
                        initialValues={{ otp: '' }}
                        validationSchema={this.reviewShcema}
                    >
                        {props => (
                            <View>
                                <View style={styles.inputField}>
                                    <CustomTexInput
                                        Name="Enter OTP"
                                        onChangeText={props.handleChange('otp')}
                                        onBlur={props.handleBlur('otp')}
                                        keyboardType={'numeric'}

                                    />
                                    <Text style={styles.errortext}>
                                        {props.touched.otp && props.errors.otp}
                                    </Text>
                                </View>
                                <View style={styles.resendCodeContainer}>
                                    {this.state.timer != 0 ? <Text style={styles.timerText}>
                                        <Text style={styles.nestedText}>Resend in   </Text>00:{this.state.timer}
                                    </Text> :
                                        <Text onPress={this.abc} style={styles.resendCode}>
                                            Resend
                </Text>
                                    }
                                </View>
                                <View style={styles.Button}><RoundButton
                                    onPress={()=>props.touched.otp && props.errors.otp===undefined?this.props.navigation.navigate('Reset'):props.handleSubmit()}
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
        color: 'rgb(45,190,123)',
        marginTop: vh(8),
        fontWeight: '700',
        marginLeft: vw(20),
        fontSize: vh(20),
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
    resendCode: {
        color: 'rgb(45,190,123)',
        marginTop: vh(8),
        fontWeight: '700',
        fontSize: vh(20),
    },
    resendCodeContainer: {
        alignItems: 'center',
        marginTop: vh(10)
    },
    nestedText: {
        color: 'grey'
    },
    errortext:{
        color:'red',
        left:vw(30),
        marginTop:vh(2)
    }
})