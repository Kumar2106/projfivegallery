/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  StyleSheet,
} from 'react-native';

export default class Header extends Component {
  render() {
    return (
      <ImageBackground
      source = {require('../img/headerbg.jpeg')}
      style={styles.headerbg}>
        <View style= {styles.headercontainer}>

        <View style={styles.profilepiccontainer}>
        <Image
        style = {styles.mypic}
        source = {require('../img/profilepic.jpeg')}

        />
        </View>
         </View>
      </ImageBackground>
    );
  }
} 

const styles = StyleSheet.create({
  headerbg: {
    flex: 1,
    width: null,
    justifyContent:'center',
    alignSelf: 'stretch'
  },
  headercontainer:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,

  },
  profilepiccontainer:{
    width:180,
    height:180,
  },
  mypic: {
    flex:1,
    width: null,
    alignSelf: 'stretch',
    borderRadius: 90,
    borderWidth: 3,
    borderColor: '#fff'

  }
});
