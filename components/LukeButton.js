import React, {useEffect} from 'react';
import {Pressable,Text,StyleSheet} from 'react-native';

function LukeButton(props)
{
    return(
        <Pressable onPress={props.onPress} style={styles.container}>
            <Text style={styles.text}>{props.children}</Text>
        </Pressable>
    );
}

export default LukeButton;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'grey',
        borderColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 32,
        paddingVertical: 64,
        borderRadius: 16,
        borderWidth: 2
    },
    text: {
        color: 'white',
        fontWeight: 'bold'
    }
});