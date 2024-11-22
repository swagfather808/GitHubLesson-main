import { View, StyleSheet } from "react-native";
import { useState } from 'react'
import MainButton from "../components/MainButton";


function FirstPage(props) {

    

    return (
        <View style={styles.container}>
            <MainButton>Main Page</MainButton>
            <MainButton onPress = {props.changeScreen} >Second Page</MainButton>
            <MainButton>Third Page</MainButton>
            <MainButton> I love lebron james</MainButton>
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