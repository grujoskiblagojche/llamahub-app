import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

import g from '../ui/Grid';

const AppIcon = props => (
    <TouchableOpacity onPress={ props.iconAction } style={[ g.f, g.abs, (props.challengeIcon ? styles.challenge_icon : styles.icon), (props.itemIcon ? styles.item_icon : styles.icon) ]}>
        <FontAwesome5 name={ props.name } size={ props.size } color={ props.color } />
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    icon: {
        width: 45, height: 45
    },
    challenge_icon: {
        width: 30, height: 30
    },
    item_icon: {
        width: 20, height: 20
    }
})

export default AppIcon;