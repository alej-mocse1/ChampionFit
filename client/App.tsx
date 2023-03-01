import { StyleSheet, Text, View } from 'react-native';
import  Home  from './src/components/home/home';
import { NativeRouter, Route , Routes } from "react-router-native";
import Weeks1 from './src/components/Weeks/weeks1';
import Weeks2 from './src/components/Weeks/weeks2';
import Weeks3 from './src/components/Weeks/weeks3';
import Weeks4 from './src/components/Weeks/weeks4';
import { StatusBar } from 'expo-status-bar';





export default function App() {
  return (
    <View style={styles.container}>
      <NativeRouter>
         <StatusBar style="auto" />
      <Routes>
        <Route  path="/" element = {<Home />} />
         <Route  path="/weeks1" element = {<Weeks1 />} />
         <Route  path="/weeks2" element = {<Weeks2 />} />
         <Route  path="/weeks3" element = {<Weeks3 />} />
         <Route  path="/weeks4" element = {<Weeks4 />} />
       </Routes>
    </NativeRouter>
      
    </View>
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
