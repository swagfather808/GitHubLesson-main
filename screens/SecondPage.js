import { StyleSheet, Text, View } from "react-native";
import MainButton from "../components/MainButton";

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
    backgroundColor: 'gray',
  },
});
