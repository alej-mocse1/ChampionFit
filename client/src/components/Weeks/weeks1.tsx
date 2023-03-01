import React from 'react';
import { Text , View , StyleSheet } from 'react-native';
import { Link } from 'react-router-native';


const Weeks1 = (): JSX.Element  => {

   return(
    <View style={styles.Conteiner}>
      

        <Text style={styles.text}>WEEK 1 </Text>

        <Text style={styles.text}>day 1 </Text>
        <Text style={styles.text}>day 2 </Text>
        <Text style={styles.text}>day 3 </Text>
        <Text style={styles.text}>day 4 </Text>
        <Text style={styles.text}>day 5 </Text>


    </View>
   )
}




const styles = StyleSheet.create({
Conteiner:{
 flex: 1,
 alignItems: 'center' ,    
 marginTop:9
},
text: {
 fontSize: 26,
 fontWeight: "800",
 marginTop:9
}
       
})

export default Weeks1