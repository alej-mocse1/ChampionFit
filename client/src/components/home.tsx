import React from 'react';
import { Text, View, Image , StyleSheet } from 'react-native';


const Home = () :JSX.Element => {
  
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
           <Text style={styles.text}>Ready?</Text>
          </View>

          <View >
           <Text >aca van los links a las diferentes semanas</Text>
          </View>

       </View>
    </View>
  );
};

const styles = StyleSheet.create({
  View1:{
marginTop:160
  },
  Conteiner:{
    flex: 1,
    alignItems: 'center' ,    
   },
   ConteinerView:{
    flex: 1,
    alignItems: 'center' ,
    marginTop:-370
   },
  img: {
   height:200,
   width:200
  },
  text: {
    fontSize: 32,
    fontWeight: "800"
   },
   Viewphrase:{
    backgroundColor: '#2B2E47',
    height:70,
    width:300
   },
   phrase:{
    fontSize: 47,
    fontWeight: "900",
    color: 'white',
    marginLeft:35
   },
   viewReady:{
    marginTop:40,
    borderBottomColor:"aqua",
    borderBottomWidth: 7
   }
});

export default Home;

