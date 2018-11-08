
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Postitem from '../../../Components/Postitem';
import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded,
} from 'react-native-admob'

export default class Home extends Component {

   static navigationOptions = {
     title: 'Esmaül Hüsna',
     headerStyle: {
       backgroundColor: '#5CB3C7',
     },
     headerTintColor: '#fff',
     headerTitleStyle: {
       fontWeight: 'bold',
     },
   };
   
  render() {
    return (
      <View style={styles.container}>
            <Postitem/>
                          <AdMobBanner
  adSize="fullBanner"
  adUnitID="ca-app-pub-3940256099942544/6300978111"
  testDevices={[AdMobBanner.simulatorId]}
  onAdFailedToLoad={error => console.error(error)}
/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  
    backgroundColor: '#F5FCFF',
  },

});
