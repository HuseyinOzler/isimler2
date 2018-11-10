

import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert
} from 'react-native';
import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded,
} from 'react-native-admob'

import AwesomeAlert from 'react-native-awesome-alerts';


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
      count:0,
      showAlert: false
    }
  }


  showAlert = () => {
    this.setState({
      showAlert: true
    });
  };

  hideAlert = () => {
    this.setState({
      showAlert: false
    });
  };
  

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

sifirlama= () => {
  this.setState({
    count:0
  })
}


sifirla = () => {
 Alert.alert(
  'Sayac Sıfırlansın mı?',
  'Vazgeç',
  [
    {text: 'Sıfırla', onPress: () => this.state.count=0},
    {text: 'Vazgeç', onPress: () => this.sifir},
  ],
  { cancelable: false }
)
}


  render() {
    const {showAlert} = this.state;
    const { navigation } = this.props;
    const isim = navigation.getParam('isim');
    return (
   <View style={{flex: 1, flexDirection: 'column',justifyContent:'center'}}>


          <View style={{flexDirection:'row',justifyContent:'space-around',backgroundColor:'#fff'}} >

         
            
            <TouchableOpacity onPress={() => {
          this.showAlert();
        }}>
          
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

              
                { 
                  
                  this.state.count <= 0 ? 0:this.state.count
                  
                }
              </Text>
              
              </TouchableOpacity>
                 <AwesomeAlert
          show={showAlert}
          showProgress={false}
          title="Tesbih Sıfırlama"
          message = " Tesbihi Sıfırlansın mı !!!"
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          showCancelButton={true}
          showConfirmButton={true}
          cancelText="Hayır"
          confirmText="Evet"
          confirmButtonColor="#DD6B55"
          onCancelPressed={() => {
            this.hideAlert();
          }}
          onConfirmPressed={() => {
            this.hideAlert();
            this.sifirlama();
          }}
        />

           
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
