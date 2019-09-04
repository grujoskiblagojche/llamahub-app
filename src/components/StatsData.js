import React from 'react';
import { View, Text } from 'react-native';

import AnimateNumber from 'react-native-animate-number';

import g from '../ui/Grid';
import t from '../ui/Typo';
import u from '../ui/Ui';

const StatsData = props => (
    <View style={[ g.f_c ]}>
        <View style={[ g.f_r, g.spb ]}>
            <View style={[ g.f, g.abs, u.tHeading, u.tableRow ]}>
                <Text style={{ color: '#118ab2' }}>.</Text>
            </View>
            <View style={[ g.f, g.abs, u.tHeading, u.tableRow ]}>
                <Text style={ t.opt }>{ props.playerOne }</Text>
            </View>
        </View>

        <View style={[ g.f_r, g.spb ]}>
            <View style={[ g.f, g.abs, u.tRow, u.tableRow ]}>
                <Text style={ t.stat }>Kills</Text>
            </View>
            <View style={[ g.f, g.abs, u.tRow, u.tableRow ]}>
                <AnimateNumber style={ t.opt } value={props.stats.kills} timing="linear" countBy={150} interval={1} formatter={(val) => { return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); }} />
            </View>
        </View>
        
        <View style={[ g.f_r, g.spb ]}>
            <View style={[ g.f, g.abs, u.tRow, u.tableRow ]}>
                <Text style={ t.stat }>Matches Played</Text>
            </View>
            <View style={[ g.f, g.abs, u.tRow, u.tableRow ]}>
                <AnimateNumber style={ t.opt } value={props.stats.matchesplayed} timing="linear" countBy={100} interval={1} formatter={(val) => { return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); }} />
            </View>
        </View>

        <View style={[ g.f_r, g.spb ]}>
            <View style={[ g.f, g.abs, u.tRow, u.tableRow ]}>
                <Text style={ t.stat }>Minutes Played</Text>
            </View>
            <View style={[ g.f, g.abs, u.tRow, u.tableRow ]}>
                <AnimateNumber style={ t.opt } value={props.stats.minutesplayed} timing="linear" countBy={100} interval={1} formatter={(val) => { return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); }} />
            </View>
        </View>

        <View style={[ g.f_r, g.spb ]}>
            <View style={[ g.f, g.abs, u.tRow, u.tableRow ]}>
                <Text style={ t.stat }>Place Top 1</Text>
            </View>
            <View style={[ g.f, g.abs, u.tRow, u.tableRow ]}>
                <AnimateNumber style={ t.opt } value={props.stats.placetop1} timing="linear" countBy={100} interval={1} formatter={(val) => { return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); }} />
            </View>
        </View>

        <View style={[ g.f_r, g.spb ]}>
            <View style={[ g.f, g.abs, u.tRow, u.tableRow ]}>
                <Text style={ t.stat }>Place Top 3</Text>
            </View>
            <View style={[ g.f, g.abs, u.tRow, u.tableRow ]}>
                <AnimateNumber style={ t.opt } value={props.stats.placetop3} timing="linear" countBy={100} interval={1} formatter={(val) => { return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); }} />
            </View>
        </View>

        <View style={[ g.f_r, g.spb ]}>
            <View style={[ g.f, g.abs, u.tRow, u.tableRow ]}>
                <Text style={ t.stat }>Place Top 10</Text>
            </View>
            <View style={[ g.f, g.abs, u.tRow, u.tableRow ]}>
                <AnimateNumber style={ t.opt } value={props.stats.placetop10} timing="linear" countBy={100} interval={1} formatter={(val) => { return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); }} />
            </View>
        </View>

        <View style={[ g.f_r, g.spb ]}>
            <View style={[ g.f, g.abs, u.tRow, u.tableRow ]}>
                <Text style={ t.stat }>Place Top 25</Text>
            </View>
            <View style={[ g.f, g.abs, u.tRow, u.tableRow ]}>
                <AnimateNumber style={ t.opt } value={props.stats.placetop25} timing="linear" countBy={100} interval={1} formatter={(val) => { return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); }} />
            </View>
        </View>

        <View style={[ g.f_r, g.spb ]}>
            <View style={[ g.f, g.abs, u.tRow, u.tableRow ]}>
                <Text style={ t.stat }>Players Outlived</Text>
            </View>
            <View style={[ g.f, g.abs, u.tRow, u.tableRow ]}>
                <AnimateNumber style={ t.opt } value={props.stats.playersoutlived} timing="linear" countBy={100} interval={1} formatter={(val) => { return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); }} />
            </View>
        </View>

        <View style={[ g.f_r, g.spb ]}>
            <View style={[ g.f, g.abs, u.tRow, u.tableRow ]}>
                <Text style={ t.stat }>Total Score</Text>
            </View>
            <View style={[ g.f, g.abs, u.tRow, u.tableRow ]}>
                <AnimateNumber style={ t.opt } value={props.stats.score} timing="linear" countBy={1500} interval={1} formatter={(val) => { return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); }} />
            </View>
        </View>

    </View>
);

export default StatsData;