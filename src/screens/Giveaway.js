import React from 'react';
import { AsyncStorage, ActivityIndicator, Dimensions, View, Text, Image, ScrollView, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { AdMobRewarded } from 'expo-ads-admob';

import { cloudHttp } from '../../axiosConfig';

import CountDown from 'react-native-countdown-component';

import Header from '../components/Header';
import Banner from '../components/Banner';
import Input from '../components/Input';
import Button from '../components/Button';
import Winners from '../components/Winners';

import g from '../ui/Grid';
import t from '../ui/Typo';

export default class Giveaway extends React.Component {
    static navigationOptions = {
        header: null
    };

    state = {
        epicUser: '',
        winners: [],
        userConfig: {
            isEnrolled: false,
            user: ''
        },
        counter: 0,
        ads: {
            watched: 0,
            lastView: null
        },
        inputError: null,
        error: null
    }

    async componentDidMount() {
        this.setCounterTime();
        await this._checkWinners();
        await this._checkEnrollment();
        // AdMob
        await this._prepareAds();
        await this._checkWatchedAds();
    }

    componentWillUnmount() {
        AsyncStorage.setItem('ads', JSON.stringify(this.state.ads));
        AdMobRewarded.removeEventListener('rewardedVideoDidRewardUser');
    }

    setCounterTime = () => {  
        let date = new Date();
        let nextFriday = this._nextWeekdayDate(date, 5);
        let fDate = Date.UTC(nextFriday.getFullYear(), nextFriday.getMonth(), nextFriday.getDate(), 12, 1, 0, 0 );
        this.setState({ counter: (fDate - Date.now()) / 1000 });
    }

    _nextWeekdayDate = (date, day_in_week) => {
        let _date = new Date(date || new Date());
        _date.setDate(_date.getDate() + ((day_in_week - 1 - _date.getDay() + 7) % 7) + 1);
        return _date;
    }

    _checkWinners = async () => {
        const data = await AsyncStorage.getItem('winners');
        if (data) {
            const _data = JSON.parse(data);
            if (_data.update > Date.now()) {
                return this.setState({ winners: _data.data });
            }
        }
        this.getWinners();
    }

    _checkEnrollment = async () => {
        const user = await AsyncStorage.getItem('enroll');
        if (user) {
            this.changeUserState(true, JSON.parse(user));
        }
    }

    getWinners = () => {
        cloudHttp.get('fetchWinners')
            .then((res) => {
                this.setState({ winners: res.data });
                AsyncStorage.setItem('winners', JSON.stringify({
                    update: (Date.now() + 43200000), // 12 hours
                    data: res.data
                }));
            })
            .catch((e) => {
                this.setState({
                    error: 'Please try again or check your internet connection..'
                })
            })
    }

    enrollUserHandler = () => {
        cloudHttp.post('enrollMember', { username: this.state.epicUser })
            .then((res) => {
                this.changeUserState(true, this.state.epicUser);
                AsyncStorage.setItem('enroll', JSON.stringify(this.state.epicUser));
                this.changeTextHandler('');
            })
            .catch((err) => {
                this.setState({
                    inputError: err.response.data.message
                })
            })
    }

    _prepareAds = async () => {
        const { unitID } = Platform.OS === 'ios' ? 'ca-app-pub-1049504034926853/3144425559' : 'ca-app-pub-1049504034926853/7298668261';
        AdMobRewarded.setAdUnitID(unitID);
        AdMobRewarded.setTestDeviceID('EMULATOR');
        AdMobRewarded.addEventListener('rewardedVideoDidRewardUser', this._rewardUser );
        await AdMobRewarded.requestAdAsync();
    }

    _checkWatchedAds = async () => {
        const ads = await AsyncStorage.getItem('ads');
        if (ads) {
            const _ads = JSON.parse(ads);
            this.setState({
                ads: {
                    watched: _ads.watched,
                    lastView: _ads.lastView
                }
            });
        }
    }

    _rewardUser = () => {
        this.setState({
            ads: {
                watched: this.state.ads.watched += 1,
                lastView: null
            }
        });
    }

    countFinishHandler = () => {
        AsyncStorage.removeItem('enroll');
        AsyncStorage.removeItem('ads');
        this.setState({
            ads: {
                watched: 0,
                lastView: null
            }
        });

        this.changeUserState(false, '');
        this.getWinners();
        this.setCounterTime();
    }

    changeUserState = (enrolled, user) => {
        this.setState({
            userConfig: {
                isEnrolled: enrolled,
                user: user
            }
        });
    }

    changeTextHandler = value => {
        this.setState({ epicUser: value });
    }

    _showAd = async () => {
        let ready = await AdMobRewarded.getIsReadyAsync();
        if (ready) {
            AdMobRewarded.showAdAsync();
        } else {
            this.setState({
                ads: {
                    watched: this.state.ads.watched += 1,
                    lastView: null
                }
            });
        }
    }
    
    render() {
        const winnersOutput = (this.state.winners.length > 0) ? this.state.winners.map((winner, index) => (
            <Winners key={ index } winner={ winner } />
        )) : null;
        const enrolledMessageOutput = (
            <View style={[ g.f_r, g.abs, { marginTop: 25, marginBottom: 25 } ]}>
                <Text style={[ t.text, { marginLeft: 10 } ]}>{ `You are enrolled as ${ this.state.userConfig.user }. We will be happy to announce you as our next Winner! `}</Text>
            </View>
        );
        return (
            <View style={ g.app }>
                <Header title={ 'Giveaway' } back={ true } navigation={ this.props.navigation } />
                <View style={[ g.f_c, g.inner, g.scroll ]}>
                    <ScrollView style={{ flex: 1 }}>
                        <Image
                            resizeMode="cover"
                            source={ require('../../assets/giveaway-banner.png') }
                            style={ styles.bannerImage } />
                        <Banner content={ 'Every Friday Night Giveaway' } />
                        { !this.state.userConfig.isEnrolled ?
                            <View style={ g.f_c }>
                                <Text style={ t.text }>Submit Your Epic Username to Enroll</Text>
                                <Input
                                    placeholder='Epic Username'
                                    value={ this.state.epicUser }
                                    onChangeText={(val) => this.changeTextHandler(val)} />
                                { this.state.inputError ? <Text style={ t.error }>{ this.state.inputError }</Text> : null }
                            </View> : enrolledMessageOutput }

                        { (this.state.epicUser && this.state.ads.watched == 3) ? <Button value='Enroll Now' btnAction={ this.enrollUserHandler } /> : null }
                        
                        { (this.state.ads.watched < 3 && !this.state.userConfig.isEnrolled) ? <Button value={`Watch Ads To Enroll ${ ` `, this.state.ads.watched }/3` } btnAction={ this._showAd } ad={ true } /> : null }
                        { (this.state.userConfig.isEnrolled) ? <Button value={`Keep Watching Ads To Support` } btnAction={ this._showAd } ad={ true } /> : null }

                        <View style={{ marginTop: 10 }}>
                            <Banner content={ 'Next Enrollment Starts In' } />
                        </View>
                        { (this.state.counter > 0) ?
                            <CountDown
                                style={ styles.countdown }
                                digitTxtStyle={{ color: '#f7f7f7', fontSize: 46 }}
                                until={ this.state.counter }
                                timeLabels={{ d: 'Days', h: 'Hours', m: 'Minutes', s: 'Seconds' }}
                                timeLabelStyle={{ color: '#888', fontSize: 12, marginTop: 5 }}
                                digitStyle={{ backgroundColor: '#222', marginLeft: 2.5, marginRight: 2.5 }}
                                onFinish={ this.countFinishHandler }
                                size={ ((Dimensions.get('screen').width - 20) / 10) } /> : null }
                        <Banner content={ 'Previews Winners' } />

                        { winnersOutput ? winnersOutput :
                            <View style={[g.f_c, g.abs, { margin: 10 }]}>
                                { this.state.error ? <Text style={ t.error }>{ this.state.error }</Text> : null }
                                <ActivityIndicator size="small" />
                            </View> }
                    
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('About')}>
                            <Text style={[ t.text, { padding: 10, paddingBottom: 15 } ]}>Check how to climb at
                                <Text style={{ color: '#fff' }}> About llamaHub</Text>'s page.</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    bannerImage: {
        width: Dimensions.get('window').width - 20,
        height: 145,
        borderRadius: 3,
        marginBottom: 10
    },
    countdown: {
        marginBottom: 20
    }
})