import React from 'react';
import { View, Text } from 'react-native';

import g from '../ui/Grid';
import t from '../ui/Typo';
import u from '../ui/Ui';

const Banner = props => (
    <View style={[ g.f, u.banner_wrapper ]}>
        <View style={[ g.f_r, g.r_cv, u.banner_inner ]}>
            <Text style={ t.bannerText }>{ props.content }</Text>
        </View>
    </View>
)

export default Banner;