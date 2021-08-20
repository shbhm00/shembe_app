import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, Image } from "react-native";
import { vh, vw, normalize } from '../dimension/dimension'

export default class Modal_1 extends React.Component {

    state = {
        modalVisible:false
    }
    render() {
        return (
            <View style={styles.centeredView}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        setModalVisible(!modalVisible);
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Image source={require('../assets/icCheckGreen.png')} />
                            <Text style={styles.modalText}>Link Sent</Text>
                            <Text style={styles.para}>A verification link has been sent to your registered email address.</Text>
                            <Pressable
                                style={styles.buttonClose}
                                onPress={() => this.setState({modalVisible:!this.state.modalVisible})}
                            >
                                <Text style={styles.textStyle}>Okay</Text>
                            </Pressable>
                        </View>
                    </View>
                </Modal>
                <Pressable
                    style={[styles.button, styles.buttonOpen]}
                    onPress={() => {this.setState({modalVisible:!this.state.modalVisible})}}>
                    <Text style={styles.textStyle}>Show Modal</Text>
                </Pressable>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        marginTop: vh(35)
    },
    modalText: {
        marginTop: vh(25),
        marginBottom: vh(15),
        textAlign: "center",
        fontSize: vh(16),
        fontWeight: '500'
    },
    para: {
        fontSize: vh(14),
        color: 'rgb(89,89,89)',
        textAlign: 'center'
    },
    textStyle: {
        color: 'rgb(1,167,163)',
        fontSize: vh(16),
        fontWeight: 'bold',
        textAlign: "center"
    }
});