import React from 'react';
import { View, Text, ScrollView, Linking, TouchableOpacity } from 'react-native';

import Header from '../components/Header';
import Icon from '../components/Icon';
import Banner from '../components/Banner';

import g from '../ui/Grid';
import t from '../ui/Typo';

export default class GiveawayRules extends React.Component {
    static navigationOptions = {
        header: null
    };

    render() {
        return (
            <View style={ g.app }>
                <Header title={ 'Giveaway Rules' } back={ true } navigation={ this.props.navigation } />
                <View style={[ g.f_c, g.c_ch, g.inner ]}>
                    <ScrollView style={{ flex: 1, width: '100%', padding: 10 }}>
                        <View style={[ g.f_c, { marginTop: 0 } ]}>

                            <Banner content={ 'How Giveaway Works?' } />

                            <View style={[ g.f_r, { marginTop: 10, marginBottom: 20 } ]}>
                                <Text style={ t.text }>Giveaway is a reward system made for our users. We will send a Free Gift to one random user each Friday chosen from our service.</Text>
                            </View>
                            
                            <View style={[ g.f_r, { marginLeft: 10 } ]}>
                                <Icon name={ 'dot-circle' } size={ 10 } color={ '#666' } itemIcon={ true } />
                                <Text style={[ t.text, { paddingRight: 30, marginBottom: 10 } ]}>To be able to enroll you will have to watch up to 5 ads and as a reward you will be given an option to enroll.</Text>
                            </View>
                            <View style={[ g.f_r, { marginLeft: 10 } ]}>
                                <Icon name={ 'dot-circle' } size={ 10 } color={ '#666' } itemIcon={ true } />
                                <Text style={[ t.text, { paddingRight: 30, marginBottom: 10 } ]}>One user can enroll once per week.</Text>
                            </View>
                            <View style={[ g.f_r, { marginLeft: 10 } ]}>
                                <Icon name={ 'dot-circle' } size={ 10 } color={ '#666' } itemIcon={ true } />
                                <Text style={[ t.text, { paddingRight: 30, marginBottom: 10 } ]}>Once the counter finishes, the Winner’s list is automatically updated with a new Winner and the Giveaway starts again.</Text>
                            </View>
                            <View style={[ g.f_r, { marginLeft: 10 } ]}>
                                <Icon name={ 'dot-circle' } size={ 10 } color={ '#666' } itemIcon={ true } />
                                <Text style={[ t.text, { paddingRight: 30, marginBottom: 10 } ]}>Each enrollment starts at 12:30 PM GTM+1.</Text>
                            </View>

                            <View style={[ g.f_r, { marginTop: 20 } ]}>
                                <Text style={ t.text }>If you see your Epic Username on our list then, Congrats! You are our next Winner :)</Text>
                            </View>
                            <View style={[ g.f_r, { borderColor: '#222', borderWidth: 1, padding: 10, marginTop: 20 } ]}>
                                <Text style={ t.text }>What you have to do to climb your reward is to send a friend request to <Text style={{ color: '#f7f7f7' }}>app.llamaHub</Text> <Text style={{ fontStyle: 'italic' }}>( so we can verify that you are the right winner )</Text>. Then you can write and/or tell us what would you like from the ItemShop.</Text>
                            </View>

                            <View style={[ g.f_r, { marginTop: 30, marginBottom: 10 } ]}>
                                <Banner content={ 'Winning options' } />
                            </View>

                            <View style={[ g.f_r, { marginLeft: 10 } ]}>
                                <Icon name={ 'dot-circle' } size={ 10 } color={ '#666' } itemIcon={ true } />
                                <Text style={[ t.text, { paddingRight: 30, marginBottom: 10 } ]}>Any Item from the Store up to 1,200 vBucks</Text>
                            </View>
                            <View style={[ g.f_r, { marginLeft: 10 } ]}>
                                <Icon name={ 'dot-circle' } size={ 10 } color={ '#666' } itemIcon={ true } />
                                <Text style={[ t.text, { paddingRight: 30, marginBottom: 10 } ]}>BattlePass</Text>
                            </View>

                            <View style={[ g.f_r, { marginTop: 10, fontStyle: 'italic' } ]}>
                                <Text style={ t.text }>Winning prices will increase in feature, depending on our user rate :)</Text>
                            </View>
                            
                            <View style={[ g.f_r, { marginTop: 30 } ]}>
                                <Banner content={ 'Giveaway Terms' } />
                            </View>

                            <View style={[ g.f_r, { marginTop: 10, marginBottom: 30 } ]}>
                                <Text style={ t.text }>The Giveaway service provided in our app does not have any support or sponsorship by Epic Games or Apple. It is exclusively llamaHub’s service and we keep all rights to change it in any time.</Text>
                            </View>

                        </View>
                    </ScrollView>
                </View>
            </View>
        )
    }
}