

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded,
} from 'react-native-admob'


export default class Sayac extends Component{

     static navigationOptions = {
     title: 'Tesbih',
     headerStyle: {
       backgroundColor: '#5CB3C7',
     },
     headerTintColor: '#fff',
     headerTitleStyle: {
       fontWeight: 'bold',
     },
   };

  constructor(props){
    super(props)
    this.state = {
      count:0
    }
  }
  

  onPress = () => {
    this.setState({
      count: this.state.count + 1
    })
  }


azalt = () => {
  this.setState({
    count: this.state.count - 1 
  })
}

sifirla = () => {
  this.setState({
    count: 0
  })
}


  render() {
    const { navigation } = this.props;
    const isim = navigation.getParam('isim');
    return (
   <View style={{flex: 1, flexDirection: 'column',justifyContent:'center'}}>


          <View style={{flexDirection:'row',justifyContent:'space-around',backgroundColor:'#fff'}} >

            <TouchableOpacity
            onPress={this.sifirla}
            >
              <Text style={{fontSize:20}} >Sıfırla</Text>
            </TouchableOpacity>
            

            

            <TouchableOpacity
            onPress={this.azalt}
            >
             <Text style={{fontSize:20}} >Azalt</Text>
          </TouchableOpacity>
           

          </View>



              <TouchableOpacity
              style={styles.button}
              onPress={this.onPress}>
              <Text style={{fontSize:20,marginBottom:30}} > {isim} </Text>
              <Text style={[styles.countText]}>
                { this.state.count !== 100000 ? this.state.count: null}
              </Text>
              </TouchableOpacity>

           
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
  countText:{
    fontSize: 60,
     color: '#000'

  },
   button: {
     justifyContent:'center',
     alignItems:'center',
     flex:1,
     alignItems: 'center',
     backgroundColor: '#fff',
     padding: 10
   },
  


});
