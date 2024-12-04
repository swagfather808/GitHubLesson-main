import { StyleSheet, Text, View,Button} from "react-native";
import MainButton from "../components/MainButton";
import Colors from "../components/Colors";
import LukeButton from "../components/LukeButton";
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  Easing,
} from 'react-native-reanimated';

export default function SecondPage(props)
{
  const randomWidth = useSharedValue(10);

  const config = {
    duration: 500,
    easing: Easing.bezier(0.5, 0.01, 0, 1),
  };

  const style = useAnimatedStyle(() => {
    return {
      width: withTiming(randomWidth.value, config),
    };
  });

  return(
    <View style={styles.container}>
      <Animated.View style={[styles.box, style]} />
      <LukeButton onPress={() => {
          randomWidth.value = Math.random() * 350;}}>
        Lebron James
      </LukeButton>
      <View>
        <Button
        onPress={props.changeScreenBack}
        title={"back"}
        />
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  box: {
    width: 100,
    height: 80,
    backgroundColor: 'black',
    margin: 30,
  },
})

