import React from 'react';
import { ActivityIndicator, View, Text, ScrollView, TouchableOpacity } from 'react-native';

import { fortniteHttp } from '../../axiosConfig';

import Header from '../components/Header';
import Banner from '../components/Banner';
import Input from '../components/Input';
import Button from '../components/Button';
import CompareData from '../components/CompareData';
import Icon from '../components/Icon';

import g from '../ui/Grid';
import u from '../ui/Ui';
import t from '../ui/Typo';

export default class Compare extends React.Component {
    static navigationOptions = {
        header: null
    };

    state = {
        playerOneStats: null,
        playerTwoStats: null,
        statsOne: null,
        statsTwo: null,
        gameMods: {
            platform: 'global',
            mod: 'solo'
        },
        form: {
            userOne: null,
            userTwo: null
        },
        epicUser: null,
        isSearching: false,
        error: null
    }

    getStats = players => {
        this.setState({ isSearching: true });
        fortniteHttp.get(`stats?username=${ players.userOne }`)
            .then((res) => {
                if (res.data.result && !res.data.global_stats) {
                    this.setState({ error: `${ players.userOne } has 0 stats ..` });
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
                    playerOneStats: _res,
                    statsOne: _res.global.solo
                });
                fortniteHttp.get(`stats?username=${ players.userTwo }`)
                    .then((res) => {
                        if (res.data.result && !res.data.global_stats) {
                            this.setState({ error: `${ players.userTwo } has 0 stats ..` });
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
                            playerTwoStats: _res,
                            statsTwo: _res.global.solo,
                            isSearching: false
                        });
                    })
                    .catch((e) => {
                        this.setState({ error: `Unable to find ${ players.userTwo }. Please make sure you enter a correct Epic Username.` });
                    })
            })
            .catch((e) => {
                this.setState({ error: `Unable to find ${ players.userOne }. Please make sure you enter a correct Epic Username.` });
            })
    }

    filterStats = (platform, mod) => {
        if (!this.state.playerOneStats[platform] || !this.state.playerOneStats[platform][mod]) {
            this.setState({
                gameMods: {
                    platform: platform,
                    mod: mod
                },
                statsOne: {
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
        } else {
            let _data = this.state.playerOneStats[platform][mod];
            this.setState({
                gameMods: {
                    platform: platform,
                    mod: mod
                },
                statsOne: _data
            });
        }
        if (!this.state.playerTwoStats[platform] || !this.state.playerTwoStats[platform][mod]) {
            this.setState({
                gameMods: {
                    platform: platform,
                    mod: mod
                },
                statsTwo: {
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
        } else {
            let _data = this.state.playerTwoStats[platform][mod];
            this.setState({
                gameMods: {
                    platform: platform,
                    mod: mod
                },
                statsTwo: _data
            });
        }
    }

    changeTextHandlerOne = value => {
        this.setState(prevState => {
            return {
                form: {
                ...prevState.form,
                    userOne: value
                }
            };
        });
    }

    changeTextHandlerTwo = value => {
        this.setState(prevState => {
            return {
                form: {
                ...prevState.form,
                    userTwo: value
                }
            };
        });
    }

    render() {
        return (
            <View style={ g.app }>
                <Header title={ 'Compare' } back={ true } navigation={ this.props.navigation } />
                <View style={[ g.f_c, g.c_ch, g.spb, g.inner ]}>
                {
                    (!this.state.playerOneStats || !this.state.playerTwoStats) ?
                        <View style={[ g.f_c ]}>
                            <Banner content={ 'Compare Player Stats' } />
                            <Input
                                placeholder='Epic User One'
                                value={ this.state.form.userOne }
                                onChangeText={(val) => this.changeTextHandlerOne(val)} />
                            <Input
                                placeholder='Epic User Two'
                                value={ this.state.form.userTwo }
                                onChangeText={(val) => this.changeTextHandlerTwo(val)} />

                            { this.state.error ? <Text style={ t.error }>{ this.state.error }</Text> : null }
                            { (this.state.form.userOne && this.state.form.userTwo) ? <Button value='Compare' btnAction={() => this.getStats(this.state.form) } /> : null }
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
                                <CompareData
                                    pOne={ this.state.playerOneStats.name }
                                    statsOne={ this.state.statsOne }
                                    pTwo={ this.state.playerTwoStats.name }
                                    statsTwo={ this.state.statsTwo } />
                            </ScrollView>
                        </View>
                    }

                    <TouchableOpacity style={[ g.f_r, g.r_cv, u.card, u.link ]} onPress={() => this.props.navigation.navigate('Stats')}>
                        <View style={[ g.f_r, g.r_cv, { flex: 1 } ]}>
                            <Icon name={ 'search' } size={ 18 } color={ '#EDAF49' } />
                            <Text style={[ t.opt, { color: '#111111' } ]}>Search New Player</Text>
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