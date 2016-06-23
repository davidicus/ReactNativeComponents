'use strict'
import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Navigator } from 'react-native';
import ViewContainer from '../components/ViewContainer';
import Spinner from 'react-native-loading-spinner-overlay';

class HomeScreen extends Component {
  constructor (props) {
    super();
    this.state = {
      visible: false
    };
  }

  /* eslint react/no-did-mount-set-state: 0 */
  componentDidMount () {
    setTimeout (() => {
      this.setState({
        visible: !this.state.visible
      });
    }, 3000);
  }

  render () {
    if (!this.state.visible) {
      return this._renderLoadingView();
    }
    return this._renderHome();
  }

  _renderLoadingView () {
    return (
      <ViewContainer style={styles.home}>
        <Spinner visible={!this.state.visible} />
      </ViewContainer>
    );
  }

  _renderHome () {
    return (
      <ViewContainer style={styles.home}>
        <TouchableOpacity onPress={(event) => this._navigateToScreenOne()}>
          <Text style={styles.homeHeaderText}>Home Screen</Text>
        </TouchableOpacity>
      </ViewContainer>
    )
  }

  _navigateToScreenOne () {
    this.props.navigator.push({
      ident: 'ScreenOne',
    })
  }
}

const styles = StyleSheet.create({
  home: {
    alignItems: 'center',
    backgroundColor: 'coral',
    flex: 1,
    justifyContent: 'center',
  },

  homeHeaderText: {
    color: '#ffffff',
  },
});

module.exports = HomeScreen
