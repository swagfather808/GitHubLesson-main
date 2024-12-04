import { View, Image, StyleSheet, Button } from 'react-native'
import MainButton from '../components/MainButton';
import Animated, {
    useSharedValue,
    withTiming,
    useAnimatedStyle,
    Easing,
} from 'react-native-reanimated';

function LebronPage(props) {
    const randomWidth = useSharedValue(10)

    const config = {
        duration: 1000,
        easing: Easing.bezier(0.5, 0.01, 0, 0.1)
    }

    const style = useAnimatedStyle(() => {
        return {
            width: withTiming(randomWidth.value, config)
        }

    })



    return (
        <View style={styles.container}>
            <Animated.View style={[styles.box, style]} />
            <Button
                title='toggle'
                onPress={() => {
                    randomWidth.value = Math.random() * 550;
                }}
            />
            <MainButton onPress={props.changeScreenBack}> I love Lebron</MainButton>

        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    box: {
        width: 100,
        height: 80,
        backgroundColor: 'green',
        margin: 30,
    }

})

export default LebronPage; 