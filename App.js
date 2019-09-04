import React, { Fragment } from 'react';
import { View, StatusBar } from 'react-native';
import { AppLoading, Icon } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';

import AppNavigator from './src/navigation/AppNavigator';

import g from './src/ui/Grid';

export default class App extends React.Component {
  state = {
    isReady: false
  }

  _loadAssets = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('./assets/map.png'),
        require('./assets/star.png'),
        require('./assets/vbuck.png'),
        require('./assets/rarity-lines.png'),
        require('./assets/giveaway-banner.png'),
        require('./assets/placeholder.png')
      ]),
      Font.loadAsync({
        'Anton-Regular': require('./assets/fonts/Anton-Regular.ttf'),
        'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
        'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
        'Roboto-Thin': require('./assets/fonts/Roboto-Thin.ttf')
      })
    ])
  }

  _handleFinishLoading = () => {
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={ this._loadAssets }
          onFinish={ this._handleFinishLoading } />
      )
    }

    return (
      <Fragment>
        <View style={ g.view }>
          <StatusBar backgroundColor="#111111" barStyle="light-content" />
          <AppNavigator />
        </View>
      </Fragment>
    )
  }

}