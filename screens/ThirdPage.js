import { StyleSheet, Text, View } from "react-native";
import MainButton from "../components/MainButton";

function ThirdPage(props) {
  return (
   <MainButton onPress = {props.changeScreenBack}> Third Page </MainButton>
  );
}

export default ThirdPage;

const styles = StyleSheet.create({});
