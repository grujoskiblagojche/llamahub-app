import React from 'react';
import { View, Text, ScrollView, Linking, TouchableOpacity } from 'react-native';

import Header from '../components/Header';
import Icon from '../components/Icon';
import Banner from '../components/Banner';

import g from '../ui/Grid';
import t from '../ui/Typo';

export default class About extends React.Component {
    static navigationOptions = {
        header: null
    };

    render() {
        return (
            <View style={ g.app }>
                <Header title={ 'About llamaHub' } back={ true } navigation={ this.props.navigation } />
                <View style={[ g.f_c, g.c_ch, g.inner ]}>
                    <ScrollView style={{ flex: 1, width: '100%', padding: 10 }}>
                        <View style={ g.f_r }>
                            <Text style={ t.text }>llamaHub is an unofficial Fortnite mobile application. Build from a fan - made for fans! {'\n'}A real llama filled with up-to-date content, and a mix of services to make the game more fun.</Text>
                        </View>
                        <View style={[ g.f_c, { marginTop: 30 } ]}>
                            <Banner content={ 'Features' } />                            
                            <View style={[ g.f_r, { marginBottom: 10, marginTop: 10 } ]}>
                                <Icon name={ 'circle' } size={ 12 } color={ '#f7f7f7' } itemIcon={ true } />
                                <Text style={t.bannerText}>BR News</Text>
                            </View>
                            <View style={[ g.f_r, { marginLeft: 20 } ]}>
                                <Icon name={ 'dot-circle' } size={ 10 } color={ '#666' } itemIcon={ true } />
                                <Text style={[ t.text, { paddingRight: 40, marginBottom: 10 } ]}>Read daily breaking news and stay up-to-date with everything new in the game.</Text>
                            </View>

                            <View style={[ g.f_r, { marginBottom: 10, marginTop: 15 } ]}>
                                <Icon name={ 'circle' } size={ 12 } color={ '#f7f7f7' } itemIcon={ true } />
                                <Text style={t.bannerText}>Landing</Text>
                            </View>
                            <View style={[ g.f_r, { marginLeft: 20 } ]}>
                                <Icon name={ 'dot-circle' } size={ 10 } color={ '#666' } itemIcon={ true } />
                                <Text style={[ t.text, { paddingRight: 40, marginBottom: 10 } ]}>Use the Landing Service to pick a Random Landing spot on the map.</Text>
                            </View>

                            <View style={[ g.f_r, { marginBottom: 10, marginTop: 15 } ]}>
                                <Icon name={ 'circle' } size={ 12 } color={ '#f7f7f7' } itemIcon={ true } />
                                <Text style={t.bannerText}>Challenges</Text>
                            </View>
                            <View style={[ g.f_r, { marginLeft: 20 } ]}>
                                <Icon name={ 'dot-circle' } size={ 10 } color={ '#666' } itemIcon={ true } />
                                <Text style={[ t.text, { paddingRight: 40, marginBottom: 10 } ]}>Keep track of Limited Time and Weekly Challenges and check their completion rewards.</Text>
                            </View>

                            <View style={[ g.f_r, { marginBottom: 10, marginTop: 15 } ]}>
                                <Icon name={ 'circle' } size={ 12 } color={ '#f7f7f7' } itemIcon={ true } />
                                <Text style={t.bannerText}>Upcoming Items</Text>
                            </View>
                            <View style={[ g.f_r, { marginLeft: 20 } ]}>
                                <Icon name={ 'dot-circle' } size={ 10 } color={ '#666' } itemIcon={ true } />
                                <Text style={[ t.text, { paddingRight: 40, marginBottom: 10 } ]}>Keep yourself up to date with everything that is about to come into the ItemShop.</Text>
                            </View>

                            <View style={[ g.f_r, { marginBottom: 10, marginTop: 15 } ]}>
                                <Icon name={ 'circle' } size={ 12 } color={ '#f7f7f7' } itemIcon={ true } />
                                <Text style={t.bannerText}>ItemShop</Text>
                            </View>
                            <View style={[ g.f_r, { marginLeft: 20 } ]}>
                                <Icon name={ 'dot-circle' } size={ 10 } color={ '#666' } itemIcon={ true } />
                                <Text style={[ t.text, { paddingRight: 40, marginBottom: 10 } ]}>Check what is available at today’s Fortnite Store.</Text>
                            </View>

                            <View style={[ g.f_r, { marginBottom: 10, marginTop: 15 } ]}>
                                <Icon name={ 'circle' } size={ 12 } color={ '#f7f7f7' } itemIcon={ true } />
                                <Text style={t.bannerText}>Stats</Text>
                            </View>
                            <View style={[ g.f_r, { marginLeft: 20 } ]}>
                                <Icon name={ 'dot-circle' } size={ 10 } color={ '#666' } itemIcon={ true } />
                                <Text style={[ t.text, { paddingRight: 40 } ]}>Find one or Compare two Epic Users. Stats can be filtered by platform ( global, keyboard-mouse, gamepad, touch ) and game mod ( solo, duo, squads ).</Text>
                            </View>
                            <View style={[ g.f_r, { marginLeft: 20 } ]}>
                                <Icon name={ 'dot-circle' } size={ 10 } color={ '#666' } itemIcon={ true } />
                                <Text style={[ t.text, { paddingRight: 40, marginBottom: 10, fontStyle: 'italic' } ]}>When searching, make sure you write a correct username to have accurate results.</Text>
                            </View>

                            <View style={[ g.f_r, { marginBottom: 10, marginTop: 15 } ]}>
                                <Icon name={ 'circle' } size={ 12 } color={ '#f7f7f7' } itemIcon={ true } />
                                <Text style={t.bannerText}>Giveaway</Text>
                            </View>
                            <View style={[ g.f_r, { marginLeft: 20 } ]}>
                                <Icon name={ 'dot-circle' } size={ 10 } color={ '#666' } itemIcon={ true } />
                                <Text style={[ t.text, { paddingRight: 40 } ]}>Use the Giveaway Service to win a Free Gift each Friday. Enroll with your Epic Username and wait for the counter to finish!</Text>
                            </View>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('GiveawayRules')}
                                style={[ g.f_r, { marginLeft: 20 } ]}>
                                <Icon name={ 'dot-circle' } size={ 10 } color={ '#666' } itemIcon={ true } />
                                <Text style={[ t.text, { color: '#f7f7f7', fontStyle: 'italic', paddingRight: 40 } ]}>How it works ?</Text>
                            </TouchableOpacity>

                        </View>

                        <View style={[ g.f_r, { marginTop: 30 } ]}>
                            <Banner content={ 'NOTE!' } />
                        </View>

                        <View style={[ g.f_r, { marginTop: 10 } ]}>
                            <Text style={ t.text }>llamaHub app is 100% responsible for the Landing and Giveaway service data updates. Challenges, Upcoming Items, ItemShop and Stats use data from a third party provider ( API ).</Text>
                        </View>

                        <View style={[ g.f_r, { marginTop: 30 } ]}>
                            <Text style={ t.text }>In order to enjoy the best experience within our app, your device must have an active internet connection. There are lots of images to show, so we decided not to save them into your device, to save your phone memory. For that reason the internet connection is required to get the full page content.</Text>
                        </View>

                        <TouchableOpacity style={[ g.f_r, { marginTop: 30 } ]} onPress={() => Linking.openURL('https://llamahubapp.com/')}>
                            <Text style={ t.text }>For more info and App roadmap, feel free to check <Text style={{ color: '#f7f7f7' }}>llamahubapp.com</Text></Text>
                        </TouchableOpacity>

                        <View style={[ g.f_r, { marginTop: 30 } ]}>
                            <Text style={[ t.title, { marginBottom: 20 } ]}>Enjoy!</Text>
                        </View>

                        <View style={[ g.f_r, { marginTop: 30 } ]}>
                            <Banner content={ 'App Details' } />
                        </View>

                        <View style={[ g.f_c, { backgroundColor: '#222', padding: 4, marginBottom: 30 } ]}>
                            <View style={[ g.f_r, { height: 50 } ]}>
                                <View style={[ g.f_r, g.r_cv, { flex: 1, borderColor: '#111', borderWidth: 2, backgroundColor: '#333', padding: 10 } ]}>
                                    <Text style={[ t.points, { fontSize: 18 } ]}>Version</Text>
                                </View>
                                <View style={[ g.f_r, g.r_cv, { flex: 1, borderColor: '#111', borderWidth: 2, backgroundColor: '#333', padding: 10 } ]}>
                                    <Text style={[ t.text, { color: '#f7f7f7' } ]}>1.0.0</Text>
                                </View>
                            </View>
                            <View style={[ g.f_r, { height: 50 } ]}>
                                <View style={[ g.f_r, g.r_cv, { flex: 1, borderColor: '#111', borderWidth: 2, backgroundColor: '#333', padding: 10 } ]}>
                                    <Text style={[ t.points, { fontSize: 18 } ]}>Release Date</Text>
                                </View>
                                <View style={[ g.f_r, g.r_cv, { flex: 1, borderColor: '#111', borderWidth: 2, backgroundColor: '#333', padding: 10 } ]}>
                                    <Text style={[ t.text, { color: '#f7f7f7' } ]}>Aug 30, 2019</Text>
                                </View>
                            </View>
                        </View>

                    </ScrollView>
                </View>
            </View>
        )
    }
}