import React from 'react'
import { View, Text, StyleSheet, Image, Touch } from 'react-native'
import { Formik } from 'formik';
import * as yup from 'yup';
import { vw, vh, normalize } from '../dimension/dimension'
import CustomTexInput from '../components/customTexInput'
import LinearGradient from 'react-native-linear-gradient';
import HorizontalLine from '../components/horizontal'
import Button from '../components/button'
import Eye_button from '../components/eyeButton'
import Forgot from './forgot'
import SignUp from './signup'
import Modal from '../components/modal'
import { connect } from 'react-redux'

class SignIn extends React.Component {
    state = {
        email: '',
        password: '',
        eye_enable: true,
        message: '',
        disabled:true
    }
    verification_handler=(values)=>{
        if(this.props.email===values.email && this.props.password===values.password)
        {
            alert("Login Successfull");
        }
        else
        {
            alert("Please enter a valid cred.")
        }
    }
    reviewShcema = yup.object({
        email: yup.string().required().email(),
        password: yup.string()
            .required('No password provided.')
            .min(8, 'Password is too short (8 char min)')
            .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
    });
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.subcontainer}>
                    <View style={styles.signIn}>
                        <Text style={styles.signInText}>Sign In</Text>
                        <HorizontalLine
                            h={4}
                            w={25}
                            br={2}
                            mtp={5}
                        />
                    </View>
                    <View style={styles.rightCornerImage}>
                        <Image style={styles.rightImage} source={require('../assets/rightCornerImage.png')} />
                        <View style={styles.signUp}>
                            <Text style={styles.signUpText} onPress={() => this.props.navigation.navigate('SignUp')}>Sign Up</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.midContainer}>
                    <Text style={styles.welcomText}>Welcome to Shembe!</Text>

                    <Formik
                        initialValues={{ email: '', password: '' }}
                        validationSchema={this.reviewShcema}
                        onSubmit={(values) => {this.verification_handler(values)}}
                    >

                        {props => {
                            console.log(props.values.email,"hello")
                            return(<View style={styles.inputContainer}>
                                <CustomTexInput
                                    Name='Email address / Mobile number'
                                    onChangeText={props.handleChange('email')}
                                    onBlur={props.handleBlur('email')}
                                />
                                <Text style={styles.errortext}>
                                    {props.touched.email && props.errors.email}
                                </Text>
                                <CustomTexInput
                                    Name="Password"
                                    secure={this.state.eye_enable}
                                    onChangeText={props.handleChange('password')}
                                    onBlur={props.handleBlur('password')}
                                />
                                <Text style={styles.errortext}>
                                    {props.touched.password && props.errors.password}
                                </Text>
                                <Text style={styles.forgotText} onPress={() => this.props.navigation.navigate('Forgot')}>Forgot Password?</Text>
                                <Button
                                    height={40}
                                    width={315}
                                    Name="Submit"
                                    borderRadius={5}
                                    narginTop={15}
                                    onPress={()=>{props.handleSubmit()}}
                                    disabled={props.values.email !='' &&props.values.password!='' && props.errors.email===undefined && props.errors.password===undefined? false : true }
                                />
                            </View>
                            )
                        }
                    }
                    </Formik>
                    <Eye_button
                        height={133}
                        right={0}
                        active={(y) => this.setState({ eye_enable: y })}
                    />
                </View>
            </View>
        )
    }
}
const mapStateToProps = (state) => {
    const {email,password} = state.authReducer
    return {
        email,password
    }
}
export default connect(mapStateToProps)(SignIn)


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    subcontainer: {
        flexDirection: 'row'
    },
    rightImage: {
        height: vh(163),
        width: vw(129),
        left: vw(128)
    },
    signUp: {
        position: 'absolute',
        height: vh(30),
        width: vw(70),
        top: vh(63)
    },
    signUpText: {
        fontSize: vh(17),
        fontWeight: 'bold',
        color: 'rgb(1,167,163)',
        left: vw(183),
        right: vw(14.5)
    },
    signInText: {
        fontSize: vh(25),
        fontWeight: '800'
    },
    signIn: {
        width: vw(90),
        height: vh(34),
        marginLeft: vw(29.5),
        top: vh(99.5),
    },
    midContainer: {
        left: vw(30),
        right: vw(30)
    },
    welcomText: {
        fontSize: vh(15),
        fontWeight: 'bold'
    },
    inputContainer: {
        marginTop: vh(25)
    },
    forgotText: {
        left: vw(195),
        fontSize: normalize(15),
        fontWeight: '500',
        marginTop: vh(10),
        color: 'rgb(140,140,140)'
    },
    eyeImage: {
        position: 'absolute',
        right: vw(75),
        top: vh(122)
    },
    errortext:{
        color:'red',
        left:vw(30),
        marginTop:vh(2)
    }
})