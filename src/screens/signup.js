import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import CustomTexInput from '../components/customTexInput'
import { vh, vw, normalize } from '../dimension/dimension'
import Gradient from '../components/horizontal'
import SignIn from './SignIn'
import { Formik } from 'formik';
import * as yup from 'yup';
import RoundButton from '../components/roundButton'
import Checkbox from '../components/checkbox'
import Eye from '../components/eyeButton'
import { doLogin } from '../action/index'
import { connect } from 'react-redux'
class SignUp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            eye_enable: true,
            disabled_round: true
        }
    }

    loginUser = (values) => {
        console.log(values);
        let payload = {
            email: values.email,
            password: values.password
        }
        this.props.doLogin(payload)
    }
    reviewShcema = yup.object({
        Fullname: yup.string().required().min(2),
        email: yup.string().required().email(),
        mobile: yup
            .string()
            .required('required')
            .matches(this.phoneRegExp, 'Enter valid phone number')
            .min(10, 'to short')
            .max(10, 'to long'),
        password: yup.string()
            .required('No password provided.')
            .min(8, 'Password is too short (8 char min)')
            .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
    });
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('SignIn')}>
                    <View style={styles.navBar}>
                        <Image style={styles.crossImage} source={require('../assets/ic-back-btn.png')} />
                        <Text style={styles.navText}>Sign In</Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.subcontainer}>
                    <Text style={styles.forgot}>Sign up</Text>

                    <Gradient
                        h={5}
                        w={25}
                        br={2}
                        mtp={5}
                    />
                    <Text style={styles.para}>Please fill the below details</Text>

                    <Formik
                        initialValues={{ Fullname: '', email: '', mobile: '', mobileoperator: '', password: '' }}
                        validationSchema={this.reviewShcema}
                        onSubmit={(values) => this.loginUser(values)}
                    >
                        {props => (
                            <View style={styles.inputField}>
                                <CustomTexInput
                                    Name="Full Name"
                                    onChangeText={props.handleChange('Fullname')}
                                    onBlur={props.handleBlur('Fullname')}
                                />
                                <Text style={styles.errortext}>
                                    {props.touched.Fullname && props.errors.Fullname}
                                </Text>
                                <CustomTexInput
                                    Name="Email address"
                                    onChangeText={props.handleChange('email')}
                                    onBlur={props.handleBlur('email')}
                                />
                                <Text style={styles.errortext}>
                                    {props.touched.email && props.errors.email}
                                </Text>
                                <CustomTexInput
                                    Name="Mobile number"
                                    onChangeText={props.handleChange('mobile')}
                                    keyboardType={'numeric'}
                                    onBlur={props.handleBlur('mobile')}
                                />
                                <Text style={styles.errortext}>
                                    {props.touched.mobile && props.errors.mobile}
                                </Text>
                                <CustomTexInput
                                    Name="Mobile Operator"
                                    onChangeText={props.handleChange('mobileoperator')}
                                    onBlur={props.handleBlur('mobileoperator')}
                                />
                                <Text style={styles.errortext}>
                                    {props.touched.mobileoperator && props.errors.mobileoperator}
                                </Text>
                                <CustomTexInput
                                    Name="Create Password"
                                    secure={this.state.eye_enable}
                                    onChangeText={props.handleChange('password')}
                                    onBlur={props.handleBlur('password')}
                                />
                                <Text style={styles.errortext}>
                                    {props.touched.password && props.errors.password}
                                </Text>
                                <View style={styles.termAndCondition}>
                                    <Checkbox
                                        check={() => this.setState({ disabled_round: !this.state.disabled_round })}
                                    />
                                    <Text style={styles.termAndConditionText}>I agree to the <Text style={styles.term}>Terms & Conditions</Text> of Shembe</Text>
                                </View>
                                <Eye
                                    height={275}
                                    right={0}
                                    active={(y) => this.setState({ eye_enable: y })}
                                />
                                <View style={styles.Button}><RoundButton
                                    disabled={this.state.disabled_round}
                                    onPress={() => { props.values.email != '' && props.values.password != '' && props.errors.email === undefined && props.errors.password === undefined ? props.handleSubmit(this.props.navigation.navigate('SignIn')) :props.handleSubmit()}}
                                /></View>
                            </View>
                        )}
                    </Formik>
                </View>
            </View>
        )
    }
}
const mapDispatchToProps = (dispatch) => ({
    doLogin: data => dispatch(doLogin(data)),
})

export default connect(null, mapDispatchToProps)(SignUp)
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    crossImage: {
        left: vw(15)
    },
    navBar: {
        flexDirection: 'row',
        top: vh(40)
    },
    navText: {
        left: vw(30),
        fontSize: vh(17),
        fontWeight: '500',
        color: 'rgb(140,140,140)'
    },
    subcontainer: {
        marginLeft: normalize(30),
        marginRight: normalize(30),
        marginTop: normalize(90)
    },
    forgot: {
        fontSize: normalize(25),
        fontWeight: '800'

    },
    para: {
        marginTop: vh(25),
        fontSize: vh(15),
        fontWeight: '500'
    },
    inputField: {
        marginTop: vh(10)
    },
    Button: {
        left: vw(259),

    },
    termAndCondition: {
        flexDirection: 'row',
        marginTop: vh(25)
    },
    termAndConditionText: {
        fontSize: vh(12.5),
        left: vw(9.5),
        top: vh(1)
    },
    term: {
        color: 'rgb(1,167,163)',
        fontWeight: '500',
        marginTop: vh(5)
    },
    errortext: {
        color: 'red',
        left: vw(30),
        fontSize: vh(12)
    }
})