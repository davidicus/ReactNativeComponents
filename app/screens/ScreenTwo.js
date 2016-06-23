'use strict'
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ViewContainer from '../components/ViewContainer';

class ScreenTwo extends Component {
  render () {
    return (
      <ViewContainer style={styles.screenTwo}>
        <Text style={styles.screenOneHeaderText}>Screen Two</Text>
      </ViewContainer>
    )
  }
}

const styles = StyleSheet.create({
  screenTwo: {
    alignItems: 'center',
    backgroundColor: 'red',
    flex: 1,
    justifyContent: 'center',
  },

  screenTwoHeaderText: {
    color: '#555555',
  },
});

module.exports = ScreenTwo
