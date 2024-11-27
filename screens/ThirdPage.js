import { StyleSheet, Text, View } from "react-native";
import MainButton from "../components/MainButton";

function SecondPage(props) {
  return (
   <MainButton onPress = {props.changeScreenBack}> Third Page </MainButton>
  );
}

export default SecondPage;

const styles = StyleSheet.create({});
