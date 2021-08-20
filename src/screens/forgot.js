import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Pressable,
  Modal,
} from 'react-native';
import CustomTexInput from '../components/customTexInput';
import {Formik} from 'formik';
import * as yup from 'yup';
import {vh, vw, normalize} from '../dimension/dimension';
import Gradient from '../components/horizontal';
import SignIn from './SignIn';
import RoundButton from '../components/roundButton';
import Otp from './otpscreen';
export default class Forgot extends React.Component {
  state = {
    text: '',
    modalVisible: false,
  };
  reviewShcema = yup.object({
    email: yup.string().required().email(),
    phonenumber: yup
      .string()
      .required('required')
      .matches(this.phoneRegExp, 'Enter valid phone number')
      .min(10, 'to short')
      .max(10, 'to long'),
  });
  render() {
    return (
      <View
        style={[
          styles.container,
          this.state.modalVisible ? {backgroundColor: 'rgba(0,0,0,0.5)'} : '',
        ]}>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('SignIn')}>
          <Image
            style={styles.crossImage}
            source={require('../assets/ic-back-btn.png')}
          />
        </TouchableOpacity>
        <View style={styles.subcontainer}>
          <Text style={styles.forgot}>Forgot Password?</Text>
          <Gradient h={5} w={25} br={2} mtp={5} />
          <Text style={styles.para}>
            Don’t worry just enter the email address or mobile number associated
            with your account.
          </Text>
          <Formik
            initialValues={{email: ''}}
            validationSchema={this.reviewShcema}>
            {props => (
              <View style={styles.inputField}>
                <CustomTexInput
                  Name="Email address / Mobile number"
                  onChangeText={props.handleChange('email')}
                  onBlur={props.handleBlur('email')}
                />
                <Text style={styles.errortext}>
                  {props.touched.email && props.errors.email}
                </Text>
                <View style={styles.Button}>
                  <RoundButton
                    onPress={() =>
                      props.touched.email && props.errors.email === undefined
                        ? this.setState({
                            modalVisible: !this.state.modalVisible,
                          })
                        : props.handleSubmit()
                    }
                  />
                </View>
              </View>
            )}
          </Formik>
        </View>
        <View style={styles.centeredView}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={this.state.modalVisible}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
              setModalVisible(!modalVisible);
            }}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Image source={require('../assets/icCheckGreen.png')} />
                <Text style={styles.modalText}>Link Sent</Text>
                <Text style={styles.para1}>
                  A verification code has been sent to your registered email
                  address and mobile..
                </Text>
                <Pressable
                  style={styles.buttonClose}
                  onPress={() => {
                    this.setState({modalVisible: !this.state.modalVisible});
                    this.props.navigation.navigate('Otp');
                  }}>
                  <Text style={styles.textStyle}>Okay</Text>
                </Pressable>
              </View>
            </View>
          </Modal>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  crossImage: {
    marginTop: vh(32),
    left: vw(15),
  },
  subcontainer: {
    marginLeft: normalize(30),
    marginRight: normalize(30),
    marginTop: normalize(48),
  },
  forgot: {
    fontSize: normalize(25),
    fontWeight: '800',
  },
  para: {
    marginTop: vh(15),
    fontSize: vh(15),
    color: 'rgb(89,89,89)',
  },
  inputField: {
    marginTop: vh(25),
  },
  Button: {
    left: vw(259),
  },
  centeredView: {
    height: vh(260),
    width: vw(326),
    top: vh(203.5),
    left: vw(25),
    right: vw(25),
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 10,
    paddingLeft: vw(44.5),
    paddingRight: vw(44.5),
    paddingTop: vh(22.5),
    paddingBottom: vh(22.5),
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    marginTop: vh(35),
  },
  modalText: {
    marginTop: vh(25),
    marginBottom: vh(15),
    textAlign: 'center',
    fontSize: vh(16),
    fontWeight: '500',
  },
  para1: {
    fontSize: vh(14),
    color: 'rgb(89,89,89)',
    textAlign: 'center',
  },
  textStyle: {
    color: 'rgb(1,167,163)',
    fontSize: vh(16),
    fontWeight: 'bold',
    textAlign: 'center',
  },
  errortext: {
    color: 'red',
    left: vw(30),
    marginTop: vh(2),
  },
});
