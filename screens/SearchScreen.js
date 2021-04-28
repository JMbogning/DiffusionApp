import * as React from 'react';
import { Text, View, StyleSheet,ActivityIndicator } from 'react-native';
import { WebView } from 'react-native-webview';
import { Card } from 'react-native-paper';
 const LoadingIndicatorView = () => {
    return <ActivityIndicator color='#009b88' size='large' />
  }
export default function SearchScreen({navigation}) {
  return (
   <WebView
        originWhitelist={['*']}
        source={{ uri: 'https://www.futura-sciences.com/sciences/actualites/' }}  
        renderLoading={LoadingIndicatorView}
        startInLoadingState={true}
      />
  );
}