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

        <Text style = {styles.name}>
        Hitesh choudhary
        </Text>

        <Text style = {styles.linear}>
        Part time photographer.
        </Text>

         </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  headerbg: {
    flex: 8,
    width: null,
    justifyContent:'center',
    alignSelf: 'stretch'
  },
  headercontainer:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'rgba(0,0,0,0.6)',

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

  },
  name:{
    marginTop: 18,
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold'
  },
  linear:{
    marginTop: 5,
    color: '#fff',
    fontSize: 15,
    fontStyle: 'italic',
  }
});
