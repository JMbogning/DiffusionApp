import React from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';

import Onboarding from 'react-native-onboarding-swiper';

const Retour = ({...props}) => (
    <TouchableOpacity
        style={{marginHorizontal:10}}
        {...props}
    >
        <Text style={{fontSize:16}}>Retour</Text>
    </TouchableOpacity>
);

const Suite = ({...props}) => (
    <TouchableOpacity
        style={{marginHorizontal:10}}
        {...props}
    >
        <Text style={{fontSize:16}}>Suite</Text>
    </TouchableOpacity>
);


const OK = ({...props}) => (
    <TouchableOpacity
        style={{marginHorizontal:10}}
        {...props}
    >
        <Text style={{fontSize:16}}>OK</Text>
    </TouchableOpacity>
);


const OnboardingScreen = ({navigation}) => {
    return (
        <Onboarding 
        SkipButtonComponent={Retour}
        NextButtonComponent={Suite}
        DoneButtonComponent={OK}
        onSkip={() => navigation.replace("Login")}
        onDone={() => navigation.navigate("Login")}
        pages={[
            {
                backgroundColor: '#fff',
                image: <Image source={require('../assets/home01.png')} />,
                title: 'Le TGV de l\'information en Afrique',
                subtitle: 'Nous vous fournissons tous les informations necessaires',
            },
            {
                backgroundColor: '#a6e4d0',
                image: <Image source={require('../assets/home01.png')} />,
                title: 'Information 24H/24',
                subtitle: 'Nous vous fournissons des informations à temps',
            },
            {
                backgroundColor: '#fdeb93',
                image: <Image source={require('../assets/home01.png')} />,
                title: 'Ideal pour vous',
                subtitle: 'Bonne lecture de vos informations',
            },
        ]}
        />
    );
    
};

export default OnboardingScreen;



const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
