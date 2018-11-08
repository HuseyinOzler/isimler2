import React from 'react';
import {
    createStackNavigator,
    createBottomTabNavigator,
    createDrawerNavigator,
    createTabNavigator
} from 'react-navigation';

import Home from './Pages/Home/index';
import Sayac from './Pages/Sayac/İndex';
import Detail from './Pages/Detail/İndex';
import Detailpost from '../Components/DetailPost';
import Postitem from '../Components/Postitem';
import Icon from 'react-native-vector-icons/Ionicons';


const İsimler = createStackNavigator({Home:{screen:Home}})
const Tesbih = createStackNavigator({Sayac:{screen:Sayac}})


const TabBar = createBottomTabNavigator({
    İsimler:{screen:İsimler,navigationOptions:{
        tabBarLabel:'İsimler',
        tabBarIcon:({tintColor}) => (
            <Icon name="md-heart"  size={24}></Icon>
        )
    }},

    Tesbih:{screen:Tesbih,navigationOptions:{
        tabBarLabel:'Tesbih',
        tabBarIcon:({activeTintColor}) => (
            <Icon name="ios-leaf" size={24}></Icon>
        )
    }}
},{
    tabBarOptions: {
        activeTintColor: '#e91e63',
         inactiveTintColor:'grey',
        labelStyle: {
            fontSize: 12,
        },
        style: {
            backgroundColor: '#fff',
        },
       
       
    }
},{
    
    navigationOptions:{
       
    }
});

export default  createStackNavigator({
    TabBar:{screen:TabBar,navigationOptions:{header:null}},
    Detail:{screen:Detail},
    Detailpost:{screen:Detailpost},
    Postitem:{screen:Postitem},
    Sayac:{screen:Sayac}
    
   
});