import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

import g from '../ui/Grid';
import t from '../ui/Typo';

const Logo = () => (
    <TouchableOpacity style={[ g.f_r, g.r_cv, { marginLeft: 10, maxWidth: '50%' } ]}>
        <Text style={[ t.title, { color: '#999' } ]}>llama</Text>
        <Text style={ t.title }>Hub</Text>
    </TouchableOpacity>
);

export default Logo;