import React from 'react';
import { Animated, Text, View, Image, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';

import Challenge from './Challenge';
import Icon from './Icon';
import ProgressiveImg from './ProgressiveImg';

import g from '../ui/Grid';
import u from '../ui/Ui';
import t from '../ui/Typo';

export default class Header extends React.Component {
    state = {
        openWeek: new Animated.Value(0),
        bannerHeight: new Animated.Value(260),
        challengesHeight: new Animated.Value(0),
        weekToggle: false
    }

    toggleWeekHandler = () => {
        let bheight = this.state.weekToggle ? 280 : 115;
        let _ch = this.props.ch ? this.props.ch : 472;
        let cheight = this.state.weekToggle ? 0 : _ch;
        let val = this.state.weekToggle ? 0 : 1;

        Animated.parallel([
            Animated.timing( this.state.bannerHeight, { toValue: bheight, duration: 360 }),
            Animated.timing( this.state.challengesHeight, { toValue: cheight, duration: 360 }),
            Animated.timing( this.state.openWeek, { toValue: val, duration: 360 })
        ], { useNativeDriver: true }).start();

        this.setState({ weekToggle: !this.state.weekToggle });
    }

    render() {
        let challengesOutput = this.props.week.challenges.map((challenge, i) => (
            <Challenge key={ i } challenge={ challenge } />
        ));
        return (
            <View style={[ g.f_c, { position: 'relative', marginBottom: 10 } ]}>
                { this.props.week.ends ?
                    <View style={[ g.f_r, g.r_cv, u.weekBadge ]}>
                        <Icon name={ 'stopwatch' } size={ 18 } color={ '#fff' } />
                        <Text style={[ t.info, { color: '#fff' } ]}>{ new Date(this.props.week.ends).toDateString() }</Text>
                    </View> : null }
                <Animated.View
                    style={{
                        position: 'relative',
                        overflow: 'hidden',
                        height: this.state.bannerHeight }}>
                    <TouchableOpacity
                        onPress={() => this.toggleWeekHandler()}
                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
                        <ProgressiveImg
                            style={ { width: '100%', height: 280, borderRadius: 3 } }
                            source={{ uri: this.props.week.image }} />
                    </TouchableOpacity>
                </Animated.View>

                <TouchableWithoutFeedback onPress={() => this.toggleWeekHandler()}>
                    <View style={[ g.f_r, g.r_cv, g.spb, u.card, { maxHeight: 60, marginTop: -3, backgroundColor: `#${this.props.week.color}` } ]}>
                        <Text style={[ t.opt, { color: '#111', fontSize: 20, lineHeight: 26 } ]}>{ this.props.week.name }</Text>
                        <Animated.View
                            style={{
                                transform: [
                                    {
                                        rotate: this.state.openWeek.interpolate({
                                            inputRange: [0, 1],
                                            outputRange: ['0deg', '-180deg']
                                        })
                                    }
                                ]}}>
                            <Icon name={ 'arrow-up' } size={ 20 } color={ '#111' } iconAction={() => this.toggleWeekHandler()} />
                        </Animated.View>
                    </View>
                </TouchableWithoutFeedback>

                <Animated.View
                    style={{
                        overflow: 'hidden',
                        marginTop: 5,
                        height: this.state.challengesHeight }}>
                    { challengesOutput }
                </Animated.View>
                
            </View>
        )
    }

}