import { StyleSheet, Text, View } from 'react-native';
import  Home  from './src/components/home/home';
import { NativeRouter, Route  } from "react-router-native";
import Weeks1 from './src/components/Weeks/weeks1';
import Weeks2 from './src/components/Weeks/weeks2';
import Weeks3 from './src/components/Weeks/weeks3';
import Weeks4 from './src/components/Weeks/weeks4';
import { StatusBar } from 'expo-status-bar';
import {Auth0Provider} from 'react-native-auth0';


export default function App() {
  return (
    <Auth0Provider 
    domain={`${process.env.DOMAIN}`} 
    clientId={`${process.env.CLIENT_ID}`}>
    <View style={styles.container}>
      <NativeRouter>
         <StatusBar style="auto" />

       <Route exact path="/">
         <Home />
       </Route>
   
      <Route exact path="/weeks1">
        <Weeks1 />
       </Route>

       <Route exact path="/weeks2">
         <Weeks2 />
       </Route>

       <Route exact path="/weeks3">
         <Weeks3 />
       </Route>

       <Route exact path="/weeks4">
         <Weeks4 />
       </Route>


    
    </NativeRouter>
    </View>
    </Auth0Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});