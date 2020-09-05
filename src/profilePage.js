import React, {useState} from 'react';
import {
  Animated,
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Image
  } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Screen1 from'./screen1';
import Screen2 from './screen2';
import ReactNativeParallaxHeader from 'react-native-parallax-header';
import { useScreens } from 'react-native-screens';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import StickyParallaxHeader from 'react-native-sticky-parallax-header'

const Tab = createMaterialTopTabNavigator();

const headerHeightMax = 300;
const headerHeightMin = 100;

const TopNav = (props) => {
  //console.log(props.scrollY);
  return(
  <View style={{flex : 1, position : 'relative'}} >
  <Tab.Navigator>
      <Tab.Screen name="Screen 1">
          {() => <Screen1 /*scrollY={props.scrollY}*/ />}
      </Tab.Screen>
      <Tab.Screen name="Screen 2" component={Screen2} />
  </Tab.Navigator>
  </View>
  )
};

const Header = (props)=> {
  //console.log(props.scrollY);
  /*const headerHeight = props.scrollY.interpolate({
    inputRange : [0,300-100],
    outputRange : [0,-200],
    extrapolate : 'clamp'
  });*/
  return(
    <Animated.View style={[styles.header,/*{ transform: [{ translateY: headerHeight }]}*/]}>
        <Image source={require('../assets/L.png')} style={styles.imgContainer}/>
        <View style={styles.userInfo}>
          <Text style={styles.text}> 
              Lavan Puri
          </Text>
          <Text style={styles.text}>
              @lavanp146
          </Text>
          <Text style={styles.text}>
              I am here to discuss news with you all
          </Text>
          <Text style={styles.text}>
              0 Followers 0 Following
          </Text>
        </View>        
    </Animated.View>
  );
};

const ProfilePage = () => {

  const [scrollY,changeY] = useState(new Animated.Value(0)); 

   return( <View style={{flex : 1,position : 'relative'}}>
        <ParallaxScrollView
      backgroundColor="lightgrey"
      contentBackgroundColor="pink"
      parallaxHeaderHeight={250}
      renderStickyHeader={() => (
        <View style={{  flex: 1, alignItems: 'center', justifyContent: 'center', padding  : 20 }}>
           <Text>Lavan Puri</Text>
         </View>
       )}
       stickyHeaderHeight={51}
      renderForeground={Header}>
      <TopNav />
    </ParallaxScrollView>
    </View>
   )
};

const styles = StyleSheet.create({
  header :{
    backgroundColor : 'lightgrey',
    paddingTop : 15,
    paddingBottom : 15,
    width : '100%',
    height : 250
  },  
  userInfo : {
    marginLeft : 28,
  },
  text : {

    paddingTop : 5,
  },
  imgContainer : {
    width : 120,
    height : 120,
  },

});

export default ProfilePage;