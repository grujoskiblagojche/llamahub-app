import React from 'react';
import { Text, TouchableOpacity , StyleSheet } from 'react-native';

import u from '../ui/Ui';
import g from '../ui/Grid';
import t from '../ui/Typo';

const Option = props => (
    <TouchableOpacity style={[ g.abs, u.card, styles.opt ]} onPress={() => props.navigation.navigate(props.option)}>
        <Text style={ t.opt }>{ props.option }</Text>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    opt: {
        width: '48.75%',
        height: 60,
        padding: 0,
        marginBottom: 10
    }
})

export default Option;