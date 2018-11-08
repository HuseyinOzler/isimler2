
import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
  TouchableOpacity
} from 'react-native';
import {
  StackNavigator
} from 'react-navigation';
import {
  withNavigation
} from 'react-navigation';
import {
  robotoWeights
} from 'react-native-typography';


 class DetailPost extends Component{
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
    const { navigation } = this.props;
    const isim = navigation.getParam('isim');
    const arapca = navigation.getParam('arapca');
    const aciklama = navigation.getParam('aciklama');
    const aciklama2 = navigation.getParam('aciklama2');
    const aciklama3 = navigation.getParam('aciklama3');

    
    
    
    
    return (
      <ScrollView>
      <View style={styles.container}>
          <View>
            <View style={styles.kutu} >
                 
              <View style={{marginBottom:20}} >
                  <View style={styles.ynn}>
                      <View><Text style={styles.baslik1}>Türkçe:</Text></View>
                      <View><Text style={styles.yazi} >{isim}</Text></View>
                  </View>

                  <View style={styles.ynn}>
                      <View><Text style={styles.baslik1}>Arapca:</Text></View>
                      <View><Text style={styles.yazi}>{arapca}</Text></View>
                  </View>

                  <View style={styles.ynn}>
                      <View>
                      <TouchableOpacity 
                      onPress={()=>{
                        this.props.navigation.navigate('Sayac',{
                          isim
                        })
                      }}>
                     
                        <View style={styles.button}>
                          
                            <Text style={{color:'#fff',fontSize:17}}>Zikret</Text>
                         
                        </View>
                      </TouchableOpacity>
                    </View>
                  </View>
                
                  <View style={{justifyContent:'space-between',margin:5}}>
                      <View style={{marginBottom:5}}><Text style={styles.baslik1}>Anlamı:</Text></View>
                      <View><Text style={styles.yazi}>{aciklama}</Text></View>
                  </View>

                  <View style={{justifyContent:'space-between',margin:5}}>
                      
                      <View><Text style={styles.yazi}>{aciklama2}</Text></View>
                  </View>


                  <View style={{justifyContent:'space-between',margin:5}}>
                     
                      <View><Text style={styles.yazi}>{aciklama3}</Text></View>
                  </View>

                 
                
              </View>
                
                
                
                
            </View>
          </View>
      </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  kutu:{
    
    backgroundColor:'#fff',
    margin: 10,
    borderWidth: 4,
    borderColor:'#fff'
    
  },
  yazi:{
    fontSize:16
  },
  ynn:{
    flexDirection:'row',
    justifyContent:'space-between',
    margin:5
  },
  baslik1:{
    fontSize:15,
    fontFamily:'alnile'

  },
  button:{
    borderWidth:1,
    borderColor:'#841584',
    fontSize:20,
    borderRadius:2,
    padding:10,
    backgroundColor:'#841584',
    
  }

});


export default withNavigation (DetailPost);