'use strict'
import React, { Component } from 'react';
import { Navigator, StyleSheet } from 'react-native';
import HomeScreen from '../screens/HomeScreen'
import ScreenOne from '../screens/ScreenOne'
import ScreenTwo from '../screens/ScreenTwo'

class AppNavigator extends Component {

  _renderScene (route, navigator) {
    const globalNavigatorProps = { navigator };

    switch (route.ident) {
      case 'HomeScreen':
        return (
          <HomeScreen {...globalNavigatorProps} />
        )

      case 'ScreenOne':
        return (
          <ScreenOne {...globalNavigatorProps} />
        )

      case 'ScreenTwo':
        return (
          <ScreenTwo {...globalNavigatorProps} />
        )

      default:
        return (<HomeScreen {...globalNavigatorProps} />)
    }
  }

  render () {
    return (
      <Navigator
        initialRoute={this.props.initialRoute}
        ref='appNavigator'
        style={styles.navigatorStyles}
        renderScene={this._renderScene}
        configureScene={(route) => ({
          ...route.screenConfig || Navigator.SceneConfigs.FloatFromRight })}
      />
    )
  }
}

const styles = StyleSheet.create({
  
});

module.exports = AppNavigator
