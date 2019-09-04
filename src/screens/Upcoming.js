import React from 'react';
import { AsyncStorage, View, Text, ActivityIndicator, Image, ImageBackground, Dimensions } from 'react-native';

import { fortniteHttp } from '../../axiosConfig';

import Header from '../components/Header';
import ProgressiveImg from '../components/ProgressiveImg';

import Swiper from 'react-native-swiper';

import g from '../ui/Grid';
import t from '../ui/Typo';
import u from '../ui/Ui';

export default class Upcoming extends React.Component {
    static navigationOptions = {
        header: null
    };

    state = {
        upcomingItems: [],
        error: null
    }

    async componentDidMount() {
        await this._checkUpdate();
    }

    _checkUpdate = async () => {
        const data = await AsyncStorage.getItem('upcomingItems');
        if (data) {
            const _data = JSON.parse(data);
            if (_data.update > Date.now()) {
                return this.setState({ upcomingItems: _data.data });
            }
        }
        this.fetchStore();
    }

    fetchStore = () => {
        fortniteHttp.get('items/upcoming')
            .then((res) => {
                this.setState({ upcomingItems: res.data.items });
                AsyncStorage.setItem('upcomingItems', JSON.stringify({
                    update: Date.now() + 43200000, // 12 hours
                    data: res.data.items
                }));
            })
            .catch((e) => {
                this.setState({
                    error: 'Please try again or check your internet connection..'
                })
            })
    }

    render() {
        let upcomingItemsOutput = (this.state.upcomingItems.length > 0) ? this.state.upcomingItems.map((item, i) => (
            <View key={ i } style={{ flex: 1 }}>
                <ProgressiveImg
                    style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').width - 15 }}
                    source={{ uri: item.images.featured ? item.images.featured : item.images.icon }} />

                <View style={[ g.f_c, g.spb, u.itemDesc ]}>
                    <View style={[ g.f_c, { marginBottom: 10, marginLeft: 10 } ]}>
                        <Text style={ t.newsTitle }>{ item.name }</Text>
                        <Text style={ t.text }>{ item.description }</Text>
                    </View>
                    <View style={[ g.f_r, g.spb ]}>
                        <View style={[ g.f_c, g.c_ch, { width: '32%' } ]}>
                            <View style={[ g.f, g.abs, u.itemDescHeader ]}>
                                <Text style={ t.bannerText }>Type</Text>
                            </View>
                            <Text style={ t.itext }>{ item.type }</Text>
                        </View>
                        <View style={[ g.f_c, g.c_ch, { width: '32%' } ]}>
                            <View style={[ g.f, g.abs, u.itemDescHeader ]}>
                                <Text style={ t.bannerText }>Rarity</Text>
                            </View>
                            <Text style={ t.itext }>{ item.rarity }</Text>
                        </View>
                        <View style={[ g.f_c, g.c_ch, { width: '32%' } ]}>
                            <View style={[ g.f, g.abs, u.itemDescHeader ]}>
                                <Text style={ t.bannerText }>Cost</Text>
                            </View>
                            <View style={[ g.f_r, g.abs ]}>
                                <Image
                                    style={{ width: 20, height: 20 }}
                                    source={ require('../../assets/vbuck.png') } />
                                <Text style={[ t.itext, { marginLeft: 5 } ]}>{ (item.price > 0) ? item.price : null }</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        )) : null;
        return (
            <View style={ g.app }>
                <Header title={ 'Upcoming Items' } back={ true } navigation={ this.props.navigation } />
                <View style={[ g.f_r, g.r_ch, { flex: 1, alignItems: 'flex-start' }]}>
                    { (this.state.upcomingItems.length > 0) ?
                    <ImageBackground source={ require('../../assets/rarity-lines.png')} style={{ width: '100%', height: Dimensions.get('window').height - 85, marginTop: 85 }}>
                        <Swiper
                            horizontal={ true }
                            showsButtons={ false }
                            showsPagination={ false }
                            loop={ false }>
                            { upcomingItemsOutput }
                        </Swiper>
                    </ImageBackground> : <View style={[g.f_c, g.abs, { marginTop: 100 }]}>
                        { this.state.error ? <Text style={ t.error }>{ this.state.error }</Text> : null }
                        <ActivityIndicator size="large" />
                    </View> }
                </View>
            </View>
        )
    }
}