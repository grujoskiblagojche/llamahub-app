import React from 'react';
import { TextInput } from 'react-native';

import u from '../ui/Ui';
import t from '../ui/Typo';

const Input = props => (
    <TextInput
        placeholderTextColor="#888"
        underlineColorAndroid="transparent"
        style={[ u.input, t.input ]}
        maxLength={30}
        { ...props } />
)

export default Input;