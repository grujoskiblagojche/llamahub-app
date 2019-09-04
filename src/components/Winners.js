import React from 'react';
import { View, Text } from 'react-native';

import g from '../ui/Grid';
import u from '../ui/Ui';
import t from '../ui/Typo';

const Winners = props => (
    <View style={[ g.f, u.winnerContainer ]}>
        <View style={[ g.f_r, g.r_cv, g.spb, u.winner ]}>
            <Text style={ t.winner }>{ props.winner.u }</Text>
            <Text style={ t.info }>{ new Date(props.winner.createdAt).toDateString() }</Text>
        </View>
    </View>
)

export default Winners;