import React from 'react';
import { Animated, Dimensions, Text, StyleSheet, View } from 'react-native';

import Nav from './Nav';
import Icon from './Icon';
import Logo from './Logo';

import g from '../ui/Grid';
import t from '../ui/Typo';

export default class Header extends React.Component {
    state = {
        navToggle: false,
        navOpacity: new Animated.Value(0),
        headerHeight: new Animated.Value(85)
    }

    toggleNavHandler = () => {
        let val = !this.state.navToggle;

        Animated.parallel([
            Animated.timing( this.state.navOpacity, { toValue: val, duration: 400 }),
            Animated.timing( this.state.headerHeight, {
                toValue: !this.state.navToggle ? Dimensions.get('window').height : 85,
                duration: 1,
                delay: this.state.navToggle ? 400 : 0
            })
        ], { useNativeDriver: true }).start();

        this.setState({ navToggle: !this.state.navToggle });
    }

    _navigate = (route) => {
        this.toggleNavHandler();
        this.props.navigation.navigate(route);
    }

    render() {
        let backBtn = this.props.back ? <Icon name={ 'arrow-left' } size={ 24 } color={ '#f7f7f7' } iconAction={() => this.props.navigation.goBack() } /> : null;
        let iconName = this.state.navToggle ? 'times' : 'bars';
        return (
            <Animated.View style={[ styles.headerContainer, { height: this.state.headerHeight }]}>
                    <View style={[ g.f_r, g.r_cv, g.spb, styles.header ]}>
                        { backBtn }
                        { this.props.dashboard ?
                            <Logo />
                            : <Text style={ t.title }>{ this.props.title }</Text> }
                        <Icon name={ iconName } size={ 24 } color={ '#f7f7f7' } iconAction={ this.toggleNavHandler } />
                    </View>
                    <View style={{ flex: 1 }}>
                        <Animated.View
                            style={{
                                opacity: this.state.navOpacity,
                                transform: [
                                    {
                                        translateX: this.state.navOpacity.interpolate({
                                            inputRange: [0, 1],
                                            outputRange: [-Dimensions.get('window').width, 0]
                                        })
                                    }
                                ]
                            }}>
                            <Nav nav={(route) => this._navigate(route) } />
                        </Animated.View>
                    </View>
            </Animated.View>
        );
    }
}

const styles = StyleSheet.create({
    headerContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        paddingTop: 25,
        width: '100%',
        backgroundColor: 'transparent',
        zIndex: 10
    },
    header: {
        height: 60,
        padding: 0,
        margin: 0
    }
})