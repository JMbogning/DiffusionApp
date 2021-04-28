import React, {useState} from 'react'
import { StyleSheet, Text, TouchableOpacity, Image, View, Button } from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import SocialButton from '../components/SocialButton';

const SignupScreen = ({navigation}) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    return (
        <View style= {styles.container}>
            <Text style={styles.text}> Creer un compte</Text>

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

            <FormInput 
                labelValue={confirmPassword}
                onChangeText={(userPassword) => setEmail(userPassword)}
                placeholderText="Confirm Password"
                iconType="lock"
                secureTextEntry={true}
            />

            <FormButton 
                buttonTitle="Connection"
                onPress={() => alert('Connection reussie')}
            />

            <View style={styles.textPrivate}>
                <Text style={[styles.color_textPrivate, {color: '#e88832'}]}>Avant de vous incrire, Veuillez </Text>
                <TouchableOpacity onPress={() => alert('Termes et conditions')}>
                    <Text>accepter les termes de service</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>et les conditions d'utilisation</Text>
                </TouchableOpacity>
               
            </View>

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

            <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Login')}>
                <Text style={styles.navButtonText}>Avez vous un compte? Connecter vous</Text>
            </TouchableOpacity>
        </View>
    );
}

export default SignupScreen;

const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      paddingTop: 50
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
   
    navButtonText: {
      fontSize: 18,
      fontWeight: '500',
      color: '#2e64e5',
      fontFamily: 'Lato-Regular',
    },

    textPrivate: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginVertical: 35,
        justifyContent: 'center',
      },

    color_textPrivate: {
        fontSize: 13,
        fontWeight: '400',
        fontFamily: 'Lato-Regular',
        color: 'grey',
      },
  });
  