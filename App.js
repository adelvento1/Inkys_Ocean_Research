import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Title from './Components/Title.js'
import Language from './Components/Language.js';
import IntroAnim from './Components/IntroAnim.js';
import LevelScreen from './Components/Level.js';

/**
 * All art assets are created by Amber Delvento
 * All Programming done by Ashley Delvento
 * Started 10/18/19
 */

const AppNavigator = createStackNavigator({
    MainScreen: {
      screen: Title
    },
    LanguageScreen:{
      screen: Language
    },
    //IntroAnim:{
    //  screen: IntroAnim
    //}
    Level:{
      screen: LevelScreen
    }
},

{
  initialRouteName: 'MainScreen'
}
    );

export default createAppContainer(AppNavigator);