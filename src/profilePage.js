import React from 'react';
import { Text, View, Animated, StyleSheet, Image } from 'react-native';
import StickyParallaxHeader from 'react-native-sticky-parallax-header';
import Screen1 from'./screen1';
import Screen2 from './screen2';

const styles = StyleSheet.create({
  content: {
    height: 1000,
    marginTop: 50
  },
  foreground: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  message: {
    color: 'white',
    fontSize: 40,
    paddingTop: 24,
    paddingBottom: 7
  },
  headerWrapper: {
    backgroundColor: 'lightblue',
    width: '100%',
    paddingHorizontal: 5,
    paddingBottom: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent : 'center',
    flex : 1
  },
  headerTitle: {
    fontSize: 16,
    color: 'white',
  },
  tabsWrapper: {
    
  },
  tabTextContainerStyle: {
    backgroundColor: 'transparent',

  },
  tabTextContainerActiveStyle: {
      borderBottomWidth : 2,
      borderBottomColor : 'blue'
  },
  tabText: {
    fontSize: 16,
    lineHeight: 20,
    paddingHorizontal: 12,
    paddingVertical: 8,
    color: 'white'
  },
  header :{
    backgroundColor : 'lightgrey',
    paddingBottom : 15,
    width : '100%',
    position : 'relative',
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
})

class ProfilePage extends React.Component {
  state = {
    scroll: new Animated.Value(0)
  }

  componentDidMount() {
    const { scroll } = this.state
    scroll.addListener(({ value }) => (this._value = value))
  }

  renderContent = (label) => (
    <View style={styles.content}>
      <Text>{label}</Text>
    </View>
  )

  renderForeground = () => {
    const { scroll } = this.state
    const titleOpacity = scroll.interpolate({
      inputRange: [0, 106, 154],
      outputRange: [1, 1, 0],
      extrapolate: 'clamp'
    })

    return (
        <Animated.View style={[styles.header,{ /*transform: [{ translateY: headerHeight }], */opacity : titleOpacity}]}>
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
  
    )
  }

  renderHeader = () => {
    const { scroll } = this.state
    const opacity = scroll.interpolate({
      inputRange: [0, 160, 210],
      outputRange: [0, 0, 1],
      extrapolate: 'clamp'
    });
    

    return (
        <Animated.View style={[styles.headerWrapper, { justifyContent : 'center', opacity}]}>
          <Text style={styles.headerTitle}>Lavan Puri</Text>
        </Animated.View>
    )
  }

  render() {
    const { scroll } = this.state

    return (
      <StickyParallaxHeader
        foreground={this.renderForeground()}
        header={this.renderHeader()}
        parallaxHeight={250}
        headerHeight={60}
        headerSize={() => {}}
        onEndReached={() => {}}
        scrollEvent={Animated.event([{ nativeEvent: { contentOffset: { y: scroll } } }], { useNativeDriver: false })}
        tabs={[
          {
            title: 'Opinions',
            content: <Screen1 />
          },
          {
            title: 'Second Tab',
            content: this.renderContent('SECOND TAB')
          },
          {
            title: 'Third Tab',
            content: this.renderContent('THIRD TAB')
          },
        ]}
        tabTextStyle={styles.tabText}
        tabTextContainerStyle={styles.tabTextContainerStyle}
        tabTextContainerActiveStyle={styles.tabTextContainerActiveStyle}
        tabsContainerBackgroundColor={'lightgrey'}
        tabsContainerStyle={{justifyContent : 'space-evenly',flex : 1,marginLeft : 0, paddingLeft :0, marginRight : 0, paddingRight : 0}}
        tabWrapperStyle={{flex : 1}}
      >
      </StickyParallaxHeader>
    )
  }
}

export default ProfilePage;


/*import React, {useState} from 'react';
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
          {() => <Screen1 scrollY={props.scrollY} />}
      </Tab.Screen>
      <Tab.Screen name="Screen 2" component={Screen2} />
  </Tab.Navigator>
  </View>
  )
};

const Header = (props)=> {
  //console.log(props.scrollY);
  const headerHeight = props.scrollY.interpolate({
    inputRange : [0,300-100],
    outputRange : [0,-200],
    extrapolate : 'clamp'
  });
  return(
    <Animated.View style={[styles.header,{ transform: [{ translateY: headerHeight }]}]}>
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
        <Header />
        <TopNav />
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
*/


/*
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
*/
