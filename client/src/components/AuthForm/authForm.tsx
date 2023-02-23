import { Text, View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const AuthForm: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Email:</Text>
      <TextInput style={styles.input} />

      <Text style={styles.label}>Password:</Text>
      <TextInput style={styles.input} />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
      },
      label: {
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 5,
      },
      input: {
        width: 100,
        height: 30,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 10,
      },
      button: {
        backgroundColor: 'blue',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginTop: 10,
      },
      buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
      },
  });

export default AuthForm