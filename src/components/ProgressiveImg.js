import React from 'react';
import { ActivityIndicator } from 'react-native';
import { Image } from 'react-native-elements';

export default class ProgressiveImg extends React.Component {
    addDefaultSrc(ev) {
        ev.target.src = require('../../assets/placeholder.png');
    }

    render() {
        return (
            <Image
                source={ this.props.source }
                style={ this.props.style }
                PlaceholderContent={ <ActivityIndicator /> }
                placeholderStyle={{ backgroundColor: 'rgba(0,0,0,0.3)' }}
                onError={ this.addDefaultSrc } />
        );
    }
}