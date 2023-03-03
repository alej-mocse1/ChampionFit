import React from 'react';
import { Text , View , StyleSheet ,TouchableWithoutFeedback } from 'react-native';
import { Link } from 'react-router-native';



const Weeks1 = (): JSX.Element  => {

   return(
    <View style={styles.Conteiner}>
      

      <View style={styles.ViewTitleBack}>
       <Link to='/' component={TouchableWithoutFeedback}>
        <Text style={styles.Back}>X</Text>
       </Link>

        <Text style={styles.title}>WEEK 1 </Text>
     </View>

       <View style={styles.viewDays}>
         <Text style={styles.text}>day 1 </Text>
         <Text style={styles.text}>day 2 </Text>
         <Text style={styles.text}>day 3 </Text>
         <Text style={styles.text}>day 4 </Text>
         <Text style={styles.text}>day 5 </Text>
      </View>

    </View>
   )
}



const styles = StyleSheet.create({
    Conteiner:{
     flex: 1,
     alignItems: 'center' ,    
     marginTop:80
    },
    ViewTitleBack:{
        flexDirection: 'row',
        marginRight:60
    },
    title:{
        fontSize: 50,
        fontWeight: "900",
        marginTop:9,
        borderBottomColor:"aqua",
        borderBottomWidth: 8,
    },
    Back:{
        fontSize: 50,
        fontWeight: "900",
        marginTop:9,
        color:"red",
        marginRight:70
    },
    viewDays:{
        marginTop:38
    },
    text: {
        fontSize: 38,
        fontWeight: "800",
        marginTop:40,
        borderWidth: 2, 
        borderColor: 'black' ,
        padding:6
    }
           
    })


export default Weeks1