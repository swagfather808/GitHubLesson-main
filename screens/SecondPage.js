import { StyleSheet, Text, View } from "react-native";
import MainButton from "../components/MainButton";
import Colors from "../components/Colors";
function SecondPage(props) {
  return (
    <View style={styles.container}>
   <MainButton onPress = {props.changeScreenBack}> mjdagoat </MainButton>
   </View>
  );
 
}

export default SecondPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:Colors.accent500,
    margin: 100,
    width: 500,
  },
});
