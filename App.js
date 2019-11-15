import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Title from './Components/Title.js'
import Language from './Components/Language.js';
import IntroAnim from './Components/IntroAnim.js';
import Level from './Components/Level.js';
import EndPage from './Components/EndPage.js';

/**
 * All art assets are created by Amber Delvento
 * All Programming done by Ashley Delvento
 * Voice Recordings in English by Ashley Delvento
 * Voice Recordings in Spanish by David Latorre
 * Script by Ashley Delvento
 * Background music by Jason Chiappa
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
    LevelScreen:{
      screen: Level
    },
    EndPage:{
      screen: EndPage
    }
},

{
  initialRouteName: 'MainScreen'
}
    );

export default createAppContainer(AppNavigator);