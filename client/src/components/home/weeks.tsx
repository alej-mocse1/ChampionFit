import React from 'react';
import { Text , View , StyleSheet, TouchableWithoutFeedback  } from 'react-native';
import { Link  } from 'react-router-native';



const Weeks = (): JSX.Element  => {

   return(
    <View style={styles.Conteiner}>
      
  <View style={styles.border}>
    <Link to={'/weeks1'}  component={TouchableWithoutFeedback} >
        <Text style={styles.text}>WEEK 1</Text>
    </Link>
  </View>

    <View style={styles.border}>
     <Link to={'/weeks2'} component={TouchableWithoutFeedback}>
        <Text style={styles.text}>WEEK 2 </Text>
     </Link>
    </View>

     <View style={styles.border}>
      <Link to={'/weeks3'} component={TouchableWithoutFeedback}>
        <Text style={styles.text}>WEEK 3 </Text>
      </Link>
     </View>

      <View style={styles.border}>
       <Link to={'/weeks4'} component={TouchableWithoutFeedback}>
        <Text style={styles.text}>WEEK 4 </Text>
       </Link>
      </View>


    </View>
   )
}



const styles = StyleSheet.create({
Conteiner:{
 flex: 1,
 alignItems: 'center' ,    
 marginTop:9
},
border:{
    borderBottomWidth: 6,
    borderBottomColor: 'aqua',
    padding:3
},
text: {
 fontSize: 26,
 fontWeight: "800",
 marginTop:9
}
       
})

export default Weeks