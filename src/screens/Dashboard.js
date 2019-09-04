import React from 'react';
import { View, Text, ActivityIndicator, AsyncStorage } from 'react-native';

import { fortniteHttp } from '../../axiosConfig';

import Header from '../components/Header';
import Option from '../components/Option';
import ProgressiveImg from '../components/ProgressiveImg';

import Swiper from 'react-native-swiper';

import g from '../ui/Grid';
import u from '../ui/Ui';
import t from '../ui/Typo';

export default class Dashboard extends React.Component {
    static navigationOptions = {
        header: null
    };

    state = {
        options: [ 'Landing', 'Challenges', 'Upcoming', 'ItemShop', 'Stats', 'Giveaway' ],
        brNews: []
    }

    async componentDidMount() {
        await this._checkUpdate();
    }

    _checkUpdate = async () => {
        const data = await AsyncStorage.getItem('brNews');
        if (data) {
            const _data = JSON.parse(data);
            if (_data.update > Date.now()) {
                return this.setState({ brNews: _data.data });
            }
        }
        this.fetchBrNews();
    }

    fetchBrNews = () => {
        fortniteHttp.get('news')
            .then((res) => {
                this.setState({ brNews: res.data.news });
                AsyncStorage.setItem('brNews', JSON.stringify({
                    update: Date.now() + 43200000, // 12 hours
                    data: res.data.news
                }));
            })
            .catch((err) => {
                alert(JSON.stringify(err));
            })
    }

    render() {
        const optOutput = this.state.options.map((opt, i) => (
            <Option option={ opt } key={ i } navigation={ this.props.navigation } />
        ));
        const sliderOutput = this.state.brNews.map((br, i) => (
            <View key={ i } style={[ u.slide, { paddingTop: 15 } ]}>
                <View style={[ g.f, g.abs, u.br_cover_bg, { backgroundColor: '#333' } ]}>
                    { br.adspace ?
                        <View style={[ u.adSpace, { backgroundColor: '#222' } ]}>
                            <Text style={ t.ad }>{ br.adspace }</Text>
                        </View> : null }

                    <View style={ u.br_cover_img }>
                        <ProgressiveImg
                            style={{ width: '100%', height: '100%' }}
                            source={{ uri: br.image }} />
                    </View>

                </View>
                <View style={[ g.f, { paddingLeft: 10, paddingRight: 10 } ]}>
                    <Text style={ t.newsTitle }>{ br.title }</Text>
                    <Text style={[ t.text ]}>{ br.body }</Text>
                </View>
            </View>
        ));
        return (
            <View style={ g.app }>
                <Header title={ 'llamaHub' } dashboard={ true } back={ false } navigation={ this.props.navigation } />
                <View style={[ g.f_c, g.c_ch, g.inner ]}>
                    <View style={[ g.f_r, g.wrap, g.spb ]}>
                        { optOutput }
                    </View>
                    <View style={[ g.f, g.abs, { flex: 1 } ]}>
                        { (this.state.brNews.length > 0) ?
                            <Swiper
                                horizontal={ true }
                                showsButtons={ false }
                                showsPagination={ false }
                                loop={ false }>
                                { sliderOutput }
                            </Swiper> : <ActivityIndicator size="large" /> }
                    </View>
                </View>
            </View>
        )
    }
}