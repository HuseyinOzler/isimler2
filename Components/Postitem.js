import React,{Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    ActivityIndicator
} from 'react-native';

import {
  robotoWeights
} from 'react-native-typography';

import {withNavigation} from 'react-navigation';

export class HomeScreen extends Component {

    constructor(props){
     super(props)
     console.log('propslar',props)
     this.state = {
       showMe: true,
       datasource:[]
     }
     
   }

   renderItem = ({item}) => {
     return(
       <View >
         <Text> {item.titleNumber} </Text>
         <Text> {item.titleOne} </Text>
         <Text> {item.titleTwo} </Text>
       </View>
     )
   }


   componentDidMount(){
     return fetch('https://hsyn-api.herokuapp.com/api/text/list')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          showMe: false,
          dataSource: responseJson.bsk,
        }, function(){
        });
      })
      .catch((error) =>{
        console.error(error);
      });
  }





    render() {

        return (
      <View>
      {
        this.state.showMe ? 
        <View style={{justifyContent: 'center',marginTop:'50%'}}>
        <ActivityIndicator size="large" color="#0000ff" style={{justifyContent:'center'}} />
        </View>
        :
               <FlatList
          keyExtractor={({ _id }, x) => _id}
          data={this.state.dataSource}
          renderItem={({ item }) =>
          
          <View style={styles.container} >
         
              <View style={styles.disKutu}>


                <TouchableOpacity
                    onPress={()=>{
                        this.props.navigation.navigate('Detail',
                        {
                        isim: item.titleOne,
                        arapca: item.titleTwo,
                        aciklama:item.aciklama,
                        aciklama2:item.aciklama2,
                        aciklama3:item.aciklama3,
                      
                        })
                  }}>
                

                  
                  
                  <View style={styles.kutu} >
                        
                        <Text style={robotoWeights.ultraLight,{color:'#352f42'}} >{item.titleNumber} </Text>
                        <Text style={robotoWeights.ultraLight,{color:'#352f42'}} >{item.titleOne} </Text>
                        <Text style={robotoWeights.bold,{color:'#352f42'}} >{item.titleTwo} </Text>
                  </View>

                </TouchableOpacity>




              </View>
          </View>

          }
         
        />
      }
      
      
        </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5'
  },
 
  kutu: {
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor:'#fff',
    margin:3,
    borderRadius:20,
    padding:20
  },


});

export default withNavigation(HomeScreen);