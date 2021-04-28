import React, {useState} from 'react'
import { StyleSheet, Text, TouchableOpacity, Image, View, Button } from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import SocialButton from '../components/SocialButton';

const LoginScreen = ({navigation}) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    return (
        <View style= {styles.container}>
            <Image 
                source={require('../assets/logo.png')} 
                style={styles.logo}
            />
            <Text style={styles.text}> Le TGV de l'information</Text>

            <FormInput 
                labelValue={email}
                onChangeText={(userEmail) => setEmail(userEmail)}
                placeholderText="Email"
                iconType="user"
                keyboardType="email-address" /*Activer automatiquement le clavier avec @*/ 
                autoCapitalize="none" /*Empecher les majuscules*/ 
                autoCorrect={false}
            />

            <FormInput 
                labelValue={password}
                onChangeText={(userPassword) => setEmail(userPassword)}
                placeholderText="Password"
                iconType="lock"
                secureTextEntry={true}
            />

            <FormButton 
                buttonTitle="Connection"
                onPress={() => navigation.navigate("SearchScreen")}
            />

            <TouchableOpacity style={styles.forgotButton} onPress={() => {}}>
                <Text style={styles.navButtonText}>Mot de passe oublié?</Text>
            </TouchableOpacity>

            <SocialButton 
                buttonTitle="Se connecter avec Facebook" 
                btnType="facebook"
                color="#4867aa"
                backgroundColor="#e6eaf4"
                onPress={() => {}}
            />

            <SocialButton 
                buttonTitle="Se connecter avec Google" 
                btnType="google"
                color="#de4d41"
                backgroundColor="#f5e7ea"
                onPress={() => {}}
            />

            <TouchableOpacity style={styles.forgotButton} onPress={() => navigation.navigate('Signup')}>
                <Text style={styles.navButtonText}>Vous n'avez pas de compte? Creer un</Text>
            </TouchableOpacity>
        </View>
    );
}

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      paddingTop: 50
    },
    logo: {
      resizeMode: 'cover',
    },
    text: {
      fontFamily: 'Kufam-SemiBoldItalic',
      fontSize: 18,
      marginBottom: 10,
      color: '#051d5f',
    },
    navButton: {
      marginTop: 15,
    },
    forgotButton: {
      marginVertical: 35,
    },
    navButtonText: {
      fontSize: 18,
      fontWeight: '500',
      color: '#2e64e5',
      fontFamily: 'Lato-Regular',
    },
  });
  