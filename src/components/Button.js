import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import g from '../ui/Grid';
import t from '../ui/Typo';
import u from '../ui/Ui';

const Button = props => (
    <View style={[ g.f_r, g.abs ]}>
        <TouchableOpacity onPress={ props.btnAction } style={[ g.f, g.abs, u.submitBtn, props.ad ? { borderColor: '#FFD166', backgroundColor: '#9e49d0' } : null ]}>
            <Text style={[ t.input, { lineHeight: 26 } ]}>{ props.value }</Text>
        </TouchableOpacity>
    </View>
);

export default Button;