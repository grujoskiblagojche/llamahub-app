import React from 'react';
import { Animated, AsyncStorage, ActivityIndicator, View, Text, Image, Dimensions } from 'react-native';

import { cloudHttp } from '../../axiosConfig';

import Header from '../components/Header';
import Button from '../components/Button';
import Icon from '../components/Icon';

import g from '../ui/Grid';
import t from '../ui/Typo';

export default class Landing extends React.Component {
    static navigationOptions = {
        header: null
    };

    state = {
        pinPosition: new Animated.ValueXY({
            x: (Dimensions.get('window').width / 2) - 20,
            y: Dimensions.get('window').width - 10
        }),
        landingPlaces: [],
        randomPlaces: [],
        landingPlace: null,
        showBtn: true,
        showMessage: false,
        error: null
    }

    async componentDidMount() {
        await this._checkUpdate();
    }

    _checkUpdate = async () => {
        const data = await AsyncStorage.getItem('landingPlaces');
        if (data) {
            const _data = JSON.parse(data);
            if (_data.update > Date.now()) {
                return this.setState({ landingPlaces: _data.data });
            }
        }
        this.fetchPlaces();
    }

    fetchPlaces = () => {
        cloudHttp.get('fetchLandings')
            .then((res) => {
                this.setState({ landingPlaces: res.data });
                AsyncStorage.setItem('landingPlaces', JSON.stringify({
                    update: Date.now() + 604800000, // 1 week
                    data: res.data
                }));
            })
            .catch((e) => {
                this.setState({
                    error: 'Please try again or check your internet connection..'
                })
            })
    }

    startRandom = () => {
        this.setState({
            landingPlace: null,
            randomPlaces: []
        });
        this.getRandomPlaces();
    }

    getRandomPlaces = () => {
        let mixed = [];
        this.state.landingPlaces.map((pl) => {
            let i = Math.floor(Math.random() * 21);
            mixed.push(this.state.landingPlaces[i]);
        });
        this.setState({ randomPlaces: mixed });
        this.startLoop();
    }

    startLoop = () => {
        this.setState({ showBtn: !this.state.showBtn });
        let i = 0;
        const interval = setInterval(() => {
            i++;
            if (i < this.state.landingPlaces.length) {
                this.setState({
                    showMessage: false,
                    landingPlace: this.state.randomPlaces[i].place
                });
                this.animatePin(this.state.randomPlaces[i].posX, this.state.randomPlaces[i].posY);
            } else {
                this.setState({
                    showMessage: true,
                    showBtn: !this.state.showBtn,
                    landingPlace: this.state.randomPlaces[this.state.randomPlaces.length - 1].place
                });
                clearInterval(interval);
            }
        }, 300)
    }

    animatePin = (_x, _y) => {
        Animated.timing(
            this.state.pinPosition,
            {
                toValue: { x: _x, y: _y },
                duration: 295,
                useNativeDriver: true
            }
        ).start();
    }

    render() {
        return (
            <View style={ g.app }>
                <Header title={ 'Random Landing' } back={ true } navigation={ this.props.navigation } />
                <View style={[ g.f_c, g.c_ch, g.spb, g.inner ]}>
                    <View style={[ g.f, { position: 'relative' } ]}>
                        <Animated.View
                            style={{
                                position: 'absolute',
                                zIndex: 5,
                                backgroundColor: 'rgba(0, 0, 0, 0.3)',
                                borderRadius: 22.5,
                                transform: [
                                    { translateX: this.state.pinPosition.x },
                                    { translateY: this.state.pinPosition.y }
                                ]
                            }}>
                            <Icon name={ 'map-marker-alt' } size={ 30 } color={ '#FFD166' } />
                        </Animated.View>
                        <Image
                            style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').width }}
                            source={ require('../../assets/map.png') } />
                    </View>
                    { this.state.landingPlace ?
                        <View style={[ g.f_c, g.c_ch, { flex: 1, justifyContent: 'flex-end', paddingBottom: 30 } ]}>
                            <Text style={ t.newsTitle }>{ this.state.landingPlace }</Text>
                            <View style={{ flex: 1, maxHeight: 20 }}>
                                { this.state.showMessage ? <Text style={ t.text }>{`Happy Landing at ${ this.state.landingPlace }`}</Text> : null }
                            </View>
                        </View> : null }
                    { (this.state.showBtn && !this.state.landingPlace) ?
                        <Text style={ t.text }>Press Start to run the loop..</Text>
                        : null }
                    { (this.state.showBtn && (this.state.landingPlaces.length > 0)) ?
                        <Button value={ !this.state.landingPlace ? 'Start' : 'Start Again' } btnAction={() => this.startRandom() } />
                        : <View style={[ g.c, g.abs, { height: 80 } ]}>
                            { this.state.error ? <Text style={ t.error }>{ this.state.error }</Text> : null }
                            <ActivityIndicator size="large" />
                        </View> }
                </View>
            </View>
        )
    }
}