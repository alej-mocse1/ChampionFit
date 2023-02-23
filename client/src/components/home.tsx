import React from 'react';
import { Text, View, Image , StyleSheet } from 'react-native';
import  authForm from './AuthForm/authForm';


const Home = () => {
  return (
    <View >
         <View style={styles.ConteinerView}>
         <Image 
          source={require('./logo.jpeg')}
          style={styles.img}></Image>
        
         <Text style={styles.text}>championFit</Text>
         </View>
    </View>
  );
};

const styles = StyleSheet.create({
  img: {
   height:250,
   width:250
  },
  text: {
    fontSize: 28,
    fontWeight: "800"
   },
   ConteinerView:{
    flex: 1,
    alignItems: 'center' ,
    marginTop:-270
   }
});

export default Home;

