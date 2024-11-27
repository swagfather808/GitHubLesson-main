import { Pressable, StyleSheet, Text } from "react-native";


function MainButton(props) {
  return (
    <Pressable onPress = {props.onPress} style={styles.container}>
      <Text style={styles.text}>{props.children}</Text>
    </Pressable>
  );
}

export default MainButton;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "yellow",
    padding: 8,
    margin: 16,
    borderColor: "black",
    justifyContent: 'center',
    alignItems: 'center'
  },

  text: {
    fontWeight: 'bold',
  },
});
