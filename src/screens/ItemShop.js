import React from 'react';
import { Animated, AsyncStorage, View, Text, Image, ActivityIndicator, ImageBackground, Dimensions, TouchableOpacity } from 'react-native';

import { fortniteHttp } from '../../axiosConfig';

import Header from '../components/Header';
import Icon from '../components/Icon';
import ProgressiveImg from '../components/ProgressiveImg';

import Swiper from 'react-native-swiper';

import g from '../ui/Grid';
import t from '../ui/Typo';
import u from '../ui/Ui';

export default class ItemShop extends React.Component {
    static navigationOptions = {
        header: null
    };

    state = {
        activeItems: 'all',

        itemShop: [],

        daily: [],
        featured: [],
        favorite: [],

        subNavOpacity: new Animated.Value(0),
        subNavOpened: false,

        error: null
    }

    async componentDidMount() {
        AsyncStorage.removeItem('itemShop');
        await this._checkUpdate();
    }

    _checkUpdate = async () => {
        const favorite = await AsyncStorage.getItem('favItems');
        if (favorite) {
            const _favorite = JSON.parse(favorite);
            this.setState({ favorite: _favorite.data });
        }

        const data = await AsyncStorage.getItem('itemShop');
        if (data) {
            const _data = JSON.parse(data);
            if (_data.update > Date.now()) {
                const { featured, daily } = _data.data;
                return this.setState({ itemShop: featured.concat(daily), daily, featured });
            }
        }
        this.fetchStore();
    }

    fetchStore = () => {
        fortniteHttp.get('shop')
            .then((res) => {
                const { featured, daily } = res.data;
                this.setState({
                    itemShop: featured.concat(daily),
                    daily: daily,
                    featured: featured
                });

                AsyncStorage.setItem('itemShop', JSON.stringify({
                    update: Date.now() + 43200000, // 12 hours
                    data: { daily, featured }
                }));
            })
            .catch((e) => {
                this.setState({
                    error: 'Please try again or check your internet connection..'
                })
            })
    }

    toggleSubNavHandler = () => {
        let val = this.state.subNavOpened ? 0 : 1;
        Animated.timing( this.state.subNavOpacity,
            {
                toValue: val,
                duration: 300,
                useNativeDriver: true
            }).start();

        this.setState({ subNavOpened: !this.state.subNavOpened });
    }

    toggleLike = id => {
        return this.state.favorite.some(_item => _item.offer == id);
    }

    likeHandler = item => {
        const duplicate = this.state.favorite.some(_item => _item.offer == item.offer);
        if (duplicate) {
            this.setState(prevState => {
                return {
                    favorite: [...prevState.favorite.filter(_item => _item.offer != item.offer)]
                }
            }, () => AsyncStorage.setItem('favItems', JSON.stringify({ data: this.state.favorite })));
        } else {
            this.setState(prevState => {
                return {
                    favorite: [...prevState.favorite, item]
                }
            }, () => AsyncStorage.setItem('favItems', JSON.stringify({ data: this.state.favorite })));
        }
    }

    filterLikedItems = type => {
        this.setState({
            itemShop: []
        });
        setTimeout(() => {
            this.setState(prevState => {
                return {
                    activeItems: type,
                    itemShop: (type == 'all') ? [...prevState.featured, ...prevState.daily] : [...prevState[type]]
                }
            })
        }, 360);
    }
    
    render() {
        let shopItemsOutput = (this.state.itemShop.length > 0) ? this.state.itemShop.map((item, i) => (
            <View key={ i } style={{ flex: 1 }}>
                <TouchableOpacity style={{ position: 'absolute', top: Dimensions.get('window').width - 57, right: 0, maxHeight: 42, zIndex: 500, backgroundColor: 'rgba(0,0,0,0.6)' }}>
                    <Icon name={ 'grin-stars' } size={ 24 } color={ !this.toggleLike(item.offer) ? '#666' : '#FFD166' } iconAction={() => this.likeHandler(item) } />
                </TouchableOpacity>

                <ProgressiveImg
                    style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').width - 15 }}
                    source={{ uri: item.image }} />
                
                <View style={[ g.f_c, g.spb, u.itemDesc ]}>
                    <View style={[ g.f_c, { marginBottom: 10, paddingLeft: 10, paddingRight: 10 } ]}>
                        <View style={[ g.f_r, g.r_cv, g.spb ]}>
                            <Text style={ t.newsTitle }>{ item.name }</Text>
                        </View>
                        <Text style={ t.text }>{ item.description }</Text>
                    </View>
                    <View style={[ g.f_r, g.spb ]}>
                        <View style={[ g.f_c, g.c_ch, { width: '24%' } ]}>
                            <View style={[ g.f, g.abs, u.itemDescHeader ]}>
                                <Text style={ t.bannerText }>Type</Text>
                            </View>
                            <Text style={ t.itext }>{ item.type }</Text>
                        </View>
                        <View style={[ g.f_c, g.c_ch, { width: '24%' } ]}>
                            <View style={[ g.f, g.abs, u.itemDescHeader ]}>
                                <Text style={ t.bannerText }>Rarity</Text>
                            </View>
                            <Text style={[ t.itext, { fontSize: item.rarity === 'uncommon' ? 13 : 14 } ]}>{ item.rarity }</Text>
                        </View>
                        <View style={[ g.f_c, g.c_ch, { width: '24%' } ]}>
                            <View style={[ g.f, g.abs, u.itemDescHeader ]}>
                                <Text style={ t.bannerText }>Cost</Text>
                            </View>
                            <View style={[ g.f_r, g.abs ]}>
                                <Image
                                    style={{ width: 20, height: 20 }}
                                    source={ require('../../assets/vbuck.png') } />
                                <Text style={[ t.itext, { marginLeft: 5 } ]}>{ item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }</Text>
                            </View>
                        </View>
                        <View style={[ g.f_c, g.c_ch, { width: '24%' } ]}>
                            <View style={[ g.f, g.abs, u.itemDescHeader ]}>
                                <Text style={ t.bannerText }>Can Gift</Text>
                            </View>
                            <View style={[ g.f_r, g.abs ]}>
                                <Icon name={ 'gift' } size={ 18 } color={ item.giftAllowed ? '#00cdab' : '#ed1f55' } itemIcon={ true } />
                                <Text style={[ t.itext, { marginLeft: 5 } ]}>{ item.giftAllowed ? 'Yes' : 'No' }</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        )) : null;
        return (
            <View style={ g.app }>
                <Header title={ 'Item Shop' } back={ true } navigation={ this.props.navigation } />
                <View style={[ g.f_r, g.r_ch, { flex: 1, alignItems: 'flex-start', position: 'relative' }]}>
                    { (this.state.featured.length > 0) ?
                        <TouchableOpacity style={{ position: 'absolute', top: 85, right: 0, zIndex: 50 }}>
                            <View style={{ backgroundColor: 'rgba(0,0,0,0.6)' }}>
                                <Animated.View
                                    style={{
                                        transform: [
                                            {
                                                rotate: this.state.subNavOpacity.interpolate({
                                                    inputRange: [0, 1],
                                                    outputRange: ['0deg', '-90deg']
                                                })
                                            }
                                        ]
                                    }}>
                                    <Icon name={ this.state.subNavOpened ? 'times' : 'ellipsis-h' } size={ 20 } color={ this.state.subNavOpened ? '#ccc' : '#666' } iconAction={ this.toggleSubNavHandler } />
                                </Animated.View>
                            </View>
                        </TouchableOpacity> : null }

                    <Animated.View
                        style={{
                            position: 'absolute',
                            top: 0,
                            right: 0,
                            backgroundColor: 'rgba(0,0,0,0.6)',
                            padding: 4,
                            opacity: this.state.subNavOpacity,
                            zIndex: this.state.subNavOpened ? 60 : 0,
                            transform: [
                                {
                                    translateY: this.state.subNavOpacity.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: [164, 134]
                                    })
                                }
                            ]
                        }}>
                        <View style={ g.f_c }>
                            <TouchableOpacity
                                onPress={() => this.filterLikedItems('all')}
                                style={[ g.f, g.abs, { backgroundColor: (this.state.activeItems == 'all') ? 'rgba(0,0,0,0.6)' : '#222', marginBottom: 2, padding: 12 }]}>
                                <Text style={ t.text }>All Items</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => this.filterLikedItems('featured')}
                                style={[ g.f, g.abs, { backgroundColor: (this.state.activeItems == 'featured') ? 'rgba(0,0,0,0.6)' : '#222', marginBottom: 2, padding: 12 }]}>
                                <Text style={ t.text }>Featured</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => this.filterLikedItems('daily')}
                                style={[ g.f, g.abs, { backgroundColor: (this.state.activeItems == 'daily') ? 'rgba(0,0,0,0.6)' : '#222', marginBottom: 2, padding: 12 }]}>
                                <Text style={ t.text }>Daily</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => this.filterLikedItems('favorite')}
                                style={[ g.f, g.abs, { backgroundColor: (this.state.activeItems == 'favorite') ? 'rgba(0,0,0,0.6)' : '#222', padding: 12 }]}>
                                <Text style={ t.text }>Favorite</Text>
                            </TouchableOpacity>
                        </View>
                    </Animated.View>

                    { (this.state.itemShop.length > 0) ?
                    <ImageBackground
                        source={ require('../../assets/rarity-lines.png')}
                        style={{ width: '100%', height: Dimensions.get('window').height - 85, marginTop: 85 }}>
                        <Swiper
                            horizontal={ true }
                            showsButtons={ false }
                            showsPagination={ false }
                            loop={ false }>
                            { shopItemsOutput }
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