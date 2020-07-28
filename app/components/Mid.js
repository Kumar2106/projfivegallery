/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class Mid extends Component {
  render() {
    return (
      <View style={styles.Mid}>

      <View style={[styles.outerview,styles.leftbar]}>
      <Text style={styles.textone}> 75 +</Text>
      <Text style={styles.texttwo}>Images     </Text>
      </View>

      <View style={styles.outerview}>
      <Text style={styles.textone}> 100K +</Text>
      <Text style={styles.texttwo}>Subscribers     </Text>
      </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  Mid: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#CF000F',
    borderTopWidth: 10,
    borderTopColor: '#fff'

  },
  outerview:{
    flex:1,
    padding: 20,
    alignItems: 'center',

  },
  textone:{
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',


  },
  texttwo:{
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 5,
  },
  leftbar: {
    borderRightWidth: 4,
    borderRightColor: '#fff'
  }
});
