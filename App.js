import { StyleSheet, SafeAreaView } from 'react-native';
import { useState } from 'react'
import FirstPage from './screens/FirstPage'
import SecondPage from './screens/SecondPage'
import ThirdPage from './screens/ThirdPage'
<<<<<<< HEAD

=======
>>>>>>> 22c72aa59524b5153474f3e2958dc18c00428e35

export default function App() {
  const [currentPage,setCurrentPage] = useState(0);

<<<<<<< HEAD
  function changeScreen2()
  {
=======
  function changeToThird() {
>>>>>>> 22c72aa59524b5153474f3e2958dc18c00428e35
    setCurrentPage(2)
  }

  function changeScreen(){
     setCurrentPage(1)
  }

  function changeScreenBack(){
    setCurrentPage(0)
  }
 
<<<<<<< HEAD
  let screen = <FirstPage changeScreen={changeScreen} changeScreen2 = {changeScreen2} />
=======
  let screen = <FirstPage changeScreen={changeScreen} changeToThird={changeToThird}/>
>>>>>>> 22c72aa59524b5153474f3e2958dc18c00428e35
  

  if(currentPage === 1){
    screen = <SecondPage changeScreenBack={changeScreenBack}/>
  }
  if(currentPage === 2)
  {
    screen = <ThirdPage changeScreenBack={changeScreenBack}/>
  }

  if(currentPage === 2) {
    screen = <ThirdPage changeScreenBack={changeScreenBack}/>
  }

  console.log(screen);
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
