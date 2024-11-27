import { StyleSheet, SafeAreaView } from 'react-native';
import { useState } from 'react'
import FirstPage from './screens/FirstPage'
import SecondPage from './screens/SecondPage'
import ThirdPage from './screens/ThirdPage'

export default function App() {
  const [currentPage,setCurrentPage] = useState(0);

  function changeToThird() {
    setCurrentPage(2)
  }

  function changeScreen(){
     setCurrentPage(1)
  }

  function changeScreenBack(){
    setCurrentPage(0)
  }
 
  let screen = <FirstPage changeScreen={changeScreen} changeToThird={changeToThird}/>
  

  if(currentPage === 1){
    screen = <SecondPage changeScreenBack={changeScreenBack}/>
  }

  if(currentPage === 2) {
    screen = <ThirdPage changeScreenBack={changeScreenBack}/>
  }


  return (
    <SafeAreaView style={styles.container}>
      {screen}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
