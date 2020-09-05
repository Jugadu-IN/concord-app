import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
  } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import ProfilePage from './profilePage';
import TextEditor from './textEditor';

  const Tab = createBottomTabNavigator();

  const MainStack = () => {
      return(
    <NavigationContainer>
    <Tab.Navigator>
        <Tab.Screen name="texteditor" component={TextEditor}/>
        <Tab.Screen name="profilepage" component={ProfilePage}/>
    </Tab.Navigator>
    </NavigationContainer>
      )
  };

  export default MainStack;