import { View, StyleSheet } from "react-native";
import { useState } from 'react'
import MainButton from "../components/MainButton";


function FirstPage(props) {

    

    return (
        <View style={styles.container}>
            <MainButton onPress = {props.changeToSecond} >Second Page</MainButton>
            <MainButton onPress = {props.changeToThird}>Third Page</MainButton>
            <MainButton onPress = {props.changeToLebron}> I love lebron james</MainButton>
        </View>
    );
}

export default FirstPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#aaaaaa',
        justifyContent: 'center'
    }
});