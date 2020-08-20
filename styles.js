import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#E5E5E5',
      paddingHorizontal: 24,
      paddingTop: Constants.statusBarHeight + 20,
    },
    text: {
      textAlign: 'center',
      justifyContent: 'center'
    },
    input: {
      borderWidth: 1,
      marginTop: 10,
      marginBottom: 10,
      borderColor: '#c3c3c3',
      paddingHorizontal: 10,
      paddingVertical: 10,
      borderRadius: 8
    },
    textProperty: {
      fontSize: 14,
      color: '#41414d',
      fontWeight: 'bold'
    },
    textValue: {
      marginTop: 8,
      fontSize: 15,
      marginBottom: 24,
      color: '#737380'
    },
    button: {
      backgroundColor: '#0488CD',
      borderRadius: 8,
      height: 50,
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center'
    },
    buttonText: {
      color: '#FFF',
      fontSize: 15,
      fontWeight: 'bold'
    },
    cepContainer: {
      marginTop: 16,
      padding: 24,
      borderRadius: 8,
      backgroundColor: '#FFF',
      marginBottom: 16,
    }
  });
  