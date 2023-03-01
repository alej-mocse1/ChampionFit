import React from 'react';
import { Text , View , StyleSheet } from 'react-native';
import { Link } from 'react-router-native';


const Weeks = (): JSX.Element  => {

   return(
    <View style={styles.Conteiner}>
      
      <Link to={'/weeks1'}>
        <Text style={styles.text}>WEEK 1 </Text>
     </Link>

     <Link to={'/weeks2'}>
        <Text style={styles.text}>WEEK 2 </Text>
     </Link>

     <Link to={'/weeks3'}>
        <Text style={styles.text}>WEEK 3 </Text>
     </Link>

     <Link to={'/weeks4'}>
        <Text style={styles.text}>WEEK 4 </Text>
     </Link>

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

export default Weeks