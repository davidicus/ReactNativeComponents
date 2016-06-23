'use strict'
import React, { Component } from 'react';
import { StyleSheet, Text, View, Navigator, TouchableOpacity } from 'react-native';
import ViewContainer from '../components/ViewContainer';

class ScreenOne extends Component {
  render () {
    return (
      <ViewContainer style={styles.screenOne}>
        <TouchableOpacity onPress={() => this.props.navigator.pop()}>
          <Text style={styles.screenOneHeaderText}>Screen One</Text>
        </TouchableOpacity>
      </ViewContainer>
    )
  }
}

const styles = StyleSheet.create({
  screenOne: {
    alignItems: 'center',
    backgroundColor: 'skyblue',
    flex: 1,
    justifyContent: 'center',
  },

  screenOneHeaderText: {
    color: '#555555',
  },
});

module.exports = ScreenOne
