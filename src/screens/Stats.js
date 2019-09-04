import React from 'react';
import { ActivityIndicator, View, Text, ScrollView, TouchableOpacity } from 'react-native';

import { fortniteHttp } from '../../axiosConfig';

import Header from '../components/Header';
import Banner from '../components/Banner';
import Input from '../components/Input';
import Button from '../components/Button';
import StatsData from '../components/StatsData';
import Icon from '../components/Icon';

import g from '../ui/Grid';
import t from '../ui/Typo';
import u from '../ui/Ui';

export default class Stats extends React.Component {
    static navigationOptions = {
        header: null
    };

    state = {
        playerStats: null,
        stats: null,
        gameMods: {
            platform: 'global',
            mod: 'solo'
        },
        form: {
            userOne: null
        },
        isSearching: false,
        error: null,
    }

    getStats = player => {
        this.setState({ isSearching: true });
        fortniteHttp.get(`stats?username=${ player }`)
            .then((res) => {
                if (res.data.result && !res.data.global_stats) {
                    this.setState({ error: `${ player } has 0 stats ..` });
                    return;
                }
                const _res = {
                    name: res.data.name,
                    global: res.data.global_stats,
                    keyboardmouse: res.data.per_input.keyboardmouse,
                    gamepad: res.data.per_input.gamepad,
                    touch: res.data.per_input.touch
                };
                this.setState({
                    playerStats: _res,
                    stats: _res.global.solo,
                    isSearching: false
                });
            })
            .catch((e) => {
                this.setState({ error: `Unable to find ${ player }. Please make sure you enter a correct Epic Username.` });
            })
    }

    filterStats = (platform, mod) => {
        if (!this.state.playerStats[platform] || !this.state.playerStats[platform][mod]) {
            this.setState({
                gameMods: {
                    platform: platform,
                    mod: mod
                },
                stats: {
                    "placetop1": 0,
                    "placetop3": 0,
                    "placetop10": 0,
                    "placetop25": 0,
                    "kills": 0,
                    "matchesplayed": 0,
                    "minutesplayed": 0,
                    "score": 0,
                    "playersoutlived": 0
                }
            });
            return;
        }
        let _data = this.state.playerStats[platform][mod];
        this.setState({
            gameMods: {
                platform: platform,
                mod: mod
            },
            stats: _data
        });
    }

    changeTextHandler = value => {
        this.setState({
            form: { userOne: value }
        })
    }

    render() {
        return (
            <View style={ g.app }>
                <Header title={ 'Stats' } back={ true } navigation={ this.props.navigation } />
                <View style={[ g.f_c, g.c_ch, g.spb, g.inner ]}>
                    
                { !this.state.playerStats ?
                    <View style={[ g.f_c ]}>
                        <Banner content={ 'Search Player Stats' } />
                        <Input
                            placeholder='Epic Username'
                            value={ this.state.form.userOne }
                            onChangeText={(val) => this.changeTextHandler(val)} />
                        { this.state.error ? <Text style={ t.error }>{ this.state.error }</Text> : null }
                        { this.state.form.userOne ? <Button value='Search' btnAction={() => this.getStats(this.state.form.userOne) } /> : null }
                        { (this.state.isSearching && !this.state.error) ? <View style={[ g.f, g.abs, { height: 60 } ]}>
                                <ActivityIndicator size="large" />
                            </View> : null }
                    </View>
                    :
                        <View style={[ g.f_c, { flex: 1 }]}>
                            <View style={[ g.f_r, g.spb, { marginBottom: 5 } ]}>
                                <TouchableOpacity
                                    style={[ g.f_r, g.abs, u.card, ((this.state.gameMods.platform == 'global') ? u.activeMod : null), { maxWidth: '24%', height: 50, padding: 0 } ]}
                                    onPress={() => this.filterStats('global', this.state.gameMods.mod)}>
                                    <Icon name={ 'globe-americas' } size={ 20 } color={ '#f7f7f7' } iconAction={() => this.filterStats('global', this.state.gameMods.mod)} />
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={[ g.f_r, g.abs, u.card, ((this.state.gameMods.platform == 'keyboardmouse') ? u.activeMod : null), { maxWidth: '24%', height: 50, padding: 0 } ]}
                                    onPress={() => this.filterStats('keyboardmouse', this.state.gameMods.mod)}>
                                    <Icon name={ 'keyboard' } size={ 20 } color={ '#f7f7f7' } iconAction={() => this.filterStats('keyboardmouse', this.state.gameMods.mod)} />
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={[ g.f_r, g.abs, u.card, ((this.state.gameMods.platform == 'gamepad') ? u.activeMod : null), { maxWidth: '24%', height: 50, padding: 0 } ]}
                                    onPress={() => this.filterStats('gamepad', this.state.gameMods.mod)}>
                                    <Icon name={ 'gamepad' } size={ 20 } color={ '#f7f7f7' } iconAction={() => this.filterStats('gamepad', this.state.gameMods.mod)} />
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={[ g.f_r, g.abs, u.card, ((this.state.gameMods.platform == 'touch') ? u.activeMod : null), { maxWidth: '24%', height: 50, padding: 0 } ]}
                                    onPress={() => this.filterStats('touch', 'solo')}>
                                    <Icon name={ 'hand-point-up' } size={ 20 } color={ '#f7f7f7' } iconAction={() => this.filterStats('touch', 'solo')} />
                                </TouchableOpacity>
                            </View>
                            <View style={[ g.f_r, g.spb ]}>
                                <TouchableOpacity
                                    style={[ g.f_r, g.abs, u.card, ((this.state.gameMods.mod == 'solo') ? u.activeMod : null), { maxWidth: '32%', height: 50, padding: 0 } ]}
                                    onPress={() => this.filterStats(this.state.gameMods.platform, 'solo')}>
                                    <Text style={ t.opt }>Solo</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={[ g.f_r, g.abs, u.card, ((this.state.gameMods.mod == 'duo') ? u.activeMod : null), { maxWidth: '32%', height: 50, padding: 0 } ]}
                                    onPress={() => this.filterStats(this.state.gameMods.platform, 'duo')}>
                                    <Text style={ t.opt }>Duo</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={[ g.f_r, g.abs, u.card, ((this.state.gameMods.mod == 'squad') ? u.activeMod : null), { maxWidth: '32%', height: 50, padding: 0 } ]}
                                    onPress={() => this.filterStats(this.state.gameMods.platform, 'squad')}>
                                    <Text style={ t.opt }>Squad</Text>
                                </TouchableOpacity>
                            </View>
                            <ScrollView style={{ flex: 1, marginTop: 10, marginBottom: 10 }}>
                                <StatsData playerOne={ this.state.playerStats.name } stats={ this.state.stats } />
                            </ScrollView>
                        </View>
                    }

                    <TouchableOpacity style={[ g.f_r, g.r_cv, u.card, u.link ]} onPress={() => this.props.navigation.navigate('Compare')}>
                        <View style={[ g.f_r, g.r_cv, { flex: 1 } ]}>
                            <Icon name={ 'balance-scale' } size={ 18 } color={ '#EDAF49' } />
                            <Text style={[ t.opt, { color: '#111111' } ]}>Compare Players</Text>
                        </View>
                        <View style={[ g.f, g.abs, u.linkIcon ]}>
                            <Icon name={ 'chevron-right' } size={ 16 } color={ '#db8d2b' } />
                        </View>
                    </TouchableOpacity>

                </View>
            </View>
        )
    }
}