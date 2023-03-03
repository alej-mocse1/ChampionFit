import React from 'react';
import { Text, View, Image , StyleSheet } from 'react-native';
import Weeks from './weeks';

const Home = () => {
  
  return (
    <View style={styles.View1} >
        <View  style={styles.Conteiner}>
          <View style={styles.ConteinerView}>
           <Image 
            source={require('./logo.jpeg')}
             style={styles.img}></Image>
        
            <Text style={styles.text}>championFit</Text>
          </View>
          <View style={styles.Viewphrase}>
            <Text style={styles.phrase}>discipline</Text>
           </View>

          <View  style={styles.viewReady}>
           <Text style={styles.textReady}>Ready?</Text>
          </View>
      
     </View>

       <Weeks></Weeks>
    </View>
  );
};

const styles = StyleSheet.create({
  View1:{
marginTop:260
  },
  Conteiner:{
    flex: 1,
    alignItems: 'center' ,    
   },
   ConteinerView:{
    flex: 1,
    alignItems: 'center' ,
    marginTop:-200
   },
  img: {
   height:200,
   width:200
  },
  textReady:{
    fontSize: 47,
    fontWeight: "900"
  },
  text: {
    fontSize: 32,
    fontWeight: "800"
   },
   Viewphrase:{
    backgroundColor: '#2B2E47',
    height:70,
    width:300,
    marginBottom:52
   },
   phrase:{
    fontSize: 48,
    fontWeight: "900",
    color: 'white',
    marginLeft:58,
    marginTop:4
   },
   viewReady:{
    marginTop:40,
    borderBottomColor:"aqua",
    borderBottomWidth: 7
   }
});

export default Home;

