import { StyleSheet, View } from 'react-native';
import Colors from './Colors';


function Title({ text }) {
    return (
        <View style={styles.titleContainer}>
            <View style={styles.textContainer}>
                <Text style={styles.titleText}>{text} </Text>
            </View>
        </View>
    )

}

export default Title;

const styles = StyleSheet.create({
    textContainer: {
        borderColor: "yellow",
        borderWidth: 2,
        borderRadius: 5,
        alignSelf: 'center',
        shadowColor: 'black',
        shadowRadius: 6,
        shadowOpacity: 0.5,
        padding: 10,
    },
    titleContainer: {
        paddingTop: 5,
    },
    titleText: {
        fontFamily: 'sans-serif',
        fontSize: 12,
        color: 'yellow',
        alignSelf: 'center',
    },

});