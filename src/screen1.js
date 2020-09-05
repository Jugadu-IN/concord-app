import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Image,
    FlatList,
    Animated
  } from 'react-native';

const Item = () => {
    return(
        <View style={styles.cont}>
        </View>
    );
}

const Screen1 = (props) => {
    //console.log(props.scrollY);
    return(
        <View style={{flex : 1}}>
        <Animated.FlatList   
        data={[{key: 'a'}, {key: 'b'},{key: 'c'},{key: 'd'},{key: 'e'},{key: 'f'},{key: 'g'},{key: 'h'}]}
        renderItem={({item}) => <Item /> } 
        /*onScroll={
            Animated.event([{nativeEvent : {contentOffset : {y: props.scrollY}}}], { useNativeDriver: true })
        }*/
        scrollEventThrottle={16}
        />
        </View>
    );
}

const styles = StyleSheet.create({
    cont : {
        height : 150,
        backgroundColor : 'lightblue',
        margin : 15,
    },
});
export default Screen1;