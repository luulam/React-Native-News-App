import React from 'react'
import { Platform } from 'react-native'
import { StackNavigator } from 'react-navigation';

import Home from './scenes/Home'
import Splash from './scenes/Splash'

ScenesApp = {
  Home: {
    screen: Home,
  },
  Splash: {
    screen: Splash
  }
}

const AppNavigator = StackNavigator({
  ...ScenesApp
}, {
    initialRouteName: 'Splash',
    mode: Platform.OS === 'ios' ? 'modal' : 'card',
    headerMode: 'none',
    cardStyle: { backgroundColor:'transparent',shadowOpacity:0 }
  });

export default AppNavigator