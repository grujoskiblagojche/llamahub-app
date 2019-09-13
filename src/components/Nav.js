import React from 'react';
import { View, Text, TouchableOpacity, Linking, Platform } from 'react-native';

import Icon from './Icon';

import g from '../ui/Grid';
import t from '../ui/Typo';
import u from '../ui/Ui';

const Nav = props => (
    <View style={[ g.f, g.spb, u.nav ]}>
        <View style={[ g.f_c, { flex: 1 } ]}>
            <TouchableOpacity style={[ g.f_r, g.r_cv, g.spb, u.card, u.link ]} onPress={() => props.nav('About')}>
                <View style={[ g.f_r, g.r_cv, { flex: 1 } ]}>
                    <Icon name={ 'info' } size={ 20 } color={ '#EDAF49' } />
                    <Text style={[ t.opt, { color: '#111111' } ]}>About llamaHub</Text>
                </View>
                <View style={[ g.f, g.abs, u.linkIcon ]}>
                    <Icon name={ 'chevron-right' } size={ 16 } color={ '#db8d2b' } iconAction={() => props.nav('About')} />
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={[ g.f_r, g.r_cv, u.card, u.link ]} onPress={() => Platform.OS === 'ios' ? Linking.openURL('https://llamahubapp.com') : Linking.openURL('https://play.google.com/store/apps/details?id=com.llamahubapp.llamahub')}>
                <View style={[ g.f_r, g.r_cv, { flex: 1 } ]}>
                    <Icon name={ 'star' } size={ 20 } color={ '#EDAF49' } />
                    <Text style={[ t.opt, { color: '#111111' } ]}>Rate Our App</Text>
                </View>
                <View style={[ g.f, g.abs, u.linkIcon ]}>
                    <Icon name={ 'external-link-alt' } size={ 16 } color={ '#db8d2b' } iconAction={() => Platform.OS === 'ios' ? Linking.openURL('https://llamahubapp.com') : Linking.openURL('https://play.google.com/store/apps/details?id=com.llamahubapp.llamahub')} />
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={[ g.f_r, g.r_cv, u.card, u.link ]} onPress={() => props.nav('Privacy')}>
                <View style={[ g.f_r, g.r_cv, { flex: 1 } ]}>
                    <Icon name={ 'user-secret' } size={ 20 } color={ '#EDAF49' } />
                    <Text style={[ t.opt, { color: '#111111' } ]}>Privacy Policy</Text>
                </View>
                <View style={[ g.f, g.abs, u.linkIcon ]}>
                    <Icon name={ 'chevron-right' } size={ 16 } color={ '#db8d2b' } iconAction={() => props.nav('Privacy')} />
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={[ g.f_r, g.r_cv, u.card, u.link ]} onPress={() => Linking.openURL('https://llamahubapp.com/contact')}>
                <View style={[ g.f_r, g.r_cv, { flex: 1 } ]}>
                    <Icon name={ 'smile' } size={ 20 } color={ '#EDAF49' } />
                    <Text style={[ t.opt, { color: '#111111' } ]}>Contact Support</Text>
                </View>
                <View style={[ g.f, g.abs, u.linkIcon ]}>
                    <Icon name={ 'external-link-alt' } size={ 16 } color={ '#db8d2b' } iconAction={() => Linking.openURL('https://llamahubapp.com/contact')} />
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={[ g.f_r, g.r_cv, u.card, u.link ]} onPress={() => props.nav('GiveawayRules')}>
                <View style={[ g.f_r, g.r_cv, { flex: 1 } ]}>
                    <Icon name={ 'file-signature' } size={ 20 } color={ '#EDAF49' } />
                    <Text style={[ t.opt, { color: '#111111' } ]}>Giveaway Rules</Text>
                </View>
                <View style={[ g.f, g.abs, u.linkIcon ]}>
                    <Icon name={ 'chevron-right' } size={ 16 } color={ '#db8d2b' } iconAction={() => props.nav('GiveawayRules')} />
                </View>
            </TouchableOpacity>
        </View>
        <View style={[ g.f_r, g.abs ]}>
            <Text style={ t.text }>Made with</Text>
            <Icon name={ 'heart' } size={ 14 } color={ '#ed1f55' } />
            <Text style={ t.text }>and lots of</Text>
            <Icon name={ 'coffee' } size={ 14 } color={ '#ccc' } />
        </View>
    </View>
);

export default Nav;