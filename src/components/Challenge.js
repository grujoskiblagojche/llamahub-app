import React from 'react';
import { View, Text, Image } from 'react-native';

import g from '../ui/Grid';
import u from '../ui/Ui';
import t from '../ui/Typo';

const Challenge = props => (
    <View style={[ g.f_r, g.spb, u.challenge ]}>
        <View style={[ g.f_r, g.r_cv, { flex: 1, padding: 0 } ]}>
            <Text style={[ t.challenge, { paddingLeft: 10, paddingRight: 10 } ]}>{ props.challenge.title }</Text>
        </View>

        { props.challenge.stars ?
            <View style={[ g.f_c, g.c_ch, g.abs, u.challenge_info ]}>
                <Image source={ require('../../assets/star.png')} style={ u.start_img } />
                <Text style={ t.points }>{ props.challenge.stars }</Text>
            </View> : null }

        { props.challenge.xp ?
            <View style={[ g.f_c, g.c_ch, g.abs, u.challenge_info ]}>
                <Text style={[ t.opt, { color: '#02b875' } ]}>XP</Text>
                <Text style={ t.points }>{ props.challenge.xp }</Text>
            </View> : null }

        { props.challenge.reward ?
            <View style={[ g.f_c, g.c_ch, g.abs, u.challenge_info ]}>
                <Image source={{ uri: props.challenge.reward.images.icon }} style={{ width: 65, height: 65 }} />
            </View> : null }

    </View>
);

export default Challenge;