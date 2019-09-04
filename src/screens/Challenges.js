import React from 'react';
import { Animated, AsyncStorage, View, Text, TouchableOpacity, ScrollView, ActivityIndicator, Dimensions } from 'react-native';

import { fortniteHttp } from '../../axiosConfig';

import Header from '../components/Header';
import Banner from '../components/Banner';
import Week from '../components/Week';

import g from '../ui/Grid';
import u from '../ui/Ui';
import t from '../ui/Typo';

export default class Challenges extends React.Component {
    static navigationOptions = {
        header: null
    };

    state = {
        season: null,
        activeView: new Animated.Value(0),
        activeChallengeView: false,
        error: null
    }

    async componentDidMount() {
        await this._checkUpdate();
    }

    _checkUpdate = async () => {
        const data = await AsyncStorage.getItem('season');
        if (data) {
            const _data = JSON.parse(data);
            if (_data.update > Date.now()) {
                return this.setState({ season: _data.data });
            }
        }
        this.fetchSeason();
    }

    fetchSeason = () => {
        fortniteHttp.get('challenges?season=current')
            .then((res) => {
                _res = this.structureWeekly(res.data);
                this.setState({ season: _res });
                AsyncStorage.setItem('season', JSON.stringify({
                    update: Date.now() + 43200000, // 12 hours
                    data: _res
                }));
            })
            .catch((e) => {
                this.setState({
                    error: 'Please try again or check your internet connection..'
                })
            })
    }

    structureWeekly = data => {
        let _data = data;
        let _weeks = [];
        for (let week in data.weeks) {
            _weeks.push(_data.weeks[week]);
        }
        _data.weeks = _weeks;
        return _data;
    }

    toggleChallengeView = val => {
        Animated.timing( this.state.activeView,
            {
                toValue: val,
                duration: 360,
                useNativeDriver: true
            }
        ).start();
        this.setState({ activeChallengeView: !this.state.activeChallengeView });
    }

    render() {
        let limFinishedOutput = this.state.season ? this.state.season.limited_time.finished.map((week, i) => (
            <Week key={i} week={week} />
        )) : null;
        let weeklyOutput = this.state.season ? this.state.season.weeks.map((week, i) => (
            <View key={i} style={[ g.f_c ]}>
                <Banner content={ `Week ${ i + 1 }` } />
                <Week week={week} ch={944} />
            </View>
        )).reverse() : null;
        return (
            <View style={ g.app }>
                <Header title={ 'Challenges' } back={ true } navigation={ this.props.navigation } />
                { this.state.season ?
                    <View style={[ g.f_c, g.inner, { overflow: 'hidden' } ]}>
                        <View style={[ g.f_r, g.spb, { marginBottom: 5 } ]}>
                            <TouchableOpacity
                                style={[ g.f_r, g.abs, u.card, (!this.state.activeChallengeView ? u.activeMod : null), { maxWidth: '49%', height: 50, padding: 0 } ]}
                                onPress={() => this.toggleChallengeView(0) }>
                                <Text style={[ t.opt, { color: '#c0c0c0' } ]}>Limited Time</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[ g.f_r, g.abs, u.card, (this.state.activeChallengeView ? u.activeMod : null), { maxWidth: '49%', height: 50, padding: 0 } ]}
                                onPress={() => this.toggleChallengeView(1) }>
                                <Text style={[ t.opt, { color: '#c0c0c0' } ]}>Weekly</Text>
                            </TouchableOpacity>
                        </View>

                        <Animated.View
                            style={[ g.f_r, g.spb,
                            {
                                flex: 1,
                                width: (Dimensions.get('window').width * 2) - 20,
                                position: 'relative',
                                transform: [
                                    {
                                        translateX: this.state.activeView.interpolate({
                                            inputRange: [0, 1],
                                            outputRange: [0, -Dimensions.get('window').width]
                                        })
                                    }
                                ]
                            }]}>
                            <View style={[ g.f_c, { position: 'absolute', top: 0, left: 0, width: Dimensions.get('window').width - 20, height: '100%' } ]}>
                                <ScrollView style={{ flex: 1 }}>
                                    <Banner content={ 'Current' } />
                                        <Week week={ this.state.season.limited_time.current } />
                                    <Banner content={ 'Finished' } />
                                        { limFinishedOutput }
                                </ScrollView>
                            </View>
                            <View style={[ g.f_c, { position: 'absolute', top: 0, left: Dimensions.get('window').width, width: Dimensions.get('window').width - 20, height: '100%' } ]}>
                                <ScrollView style={{ flex: 1 }}>
                                    { weeklyOutput }
                                </ScrollView>
                            </View>
                        </Animated.View>
                        
                </View> : <View style={[g.f_c, g.abs, { marginTop: 100 }]}>
                    { this.state.error ? <Text style={ t.error }>{ this.state.error }</Text> : null }
                    <ActivityIndicator size="large" />
                </View> }
            </View>
        )
    }
}