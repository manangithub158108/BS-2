import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import HomeScreen from './Screens/HomeScreen';
import ItemScreen from './Screens/ItemScreen';
import UserAuth from './Screens/UserAuth';

export default class App extends Component{
  render(){
    return(
      // <View>
        
      // </View>
      <AppContainer/>
    )
  }
}

const TabNavigationItemExchange = createBottomTabNavigator({
  HomeScreen : {
    screen : HomeScreen,
    navigationOptions : {
      tabBarLabel : 'Home Screen',
      tabBarIcon : <Image source = {require('./assets/home.jpg')} style = {{
        width : 30,
        height : 30
      }}></Image>
    }
  },
  ItemScreen : {
    screen : ItemScreen,
    navigationOptions : {
      tabBarLabel : 'Item Screen',
      tabBarIcon : <Image source = {require('./assets/addItem.png')} style = {{
        width : 30,
        height : 30
      }}></Image>
    }
  },
})

const SwitchNavigation = createSwitchNavigator({
  UserAuth : {
    screen : UserAuth
  },
  TabNavigationItemExchange : {
    screen : TabNavigationItemExchange
  }
})

const AppContainer = createAppContainer(SwitchNavigation);