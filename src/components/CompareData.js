import React from 'react';
import { View, Text } from 'react-native';

import AnimateNumber from 'react-native-animate-number';

import g from '../ui/Grid';
import u from '../ui/Ui';
import t from '../ui/Typo';

const CompareData = props => (
    <View style={[ g.f_c ]}>
        <View style={[ g.f_r, g.spb ]}>
            <View style={[ g.f, g.abs, u.tHeading, u.tableRow ]}>
                <Text style={{ color: '#118ab2' }}>.</Text>
            </View>
            <View style={[ g.f, g.abs, u.tHeading, u.tableRow ]}>
                <Text style={ t.opt }>{ props.pOne }</Text>
            </View>
            <View style={[ g.f, g.abs, u.tHeading, u.tableRow ]}>
                <Text style={ t.opt }>{ props.pTwo }</Text>
            </View>
        </View>

        <View style={[ g.f_r, g.spb ]}>
            <View style={[ g.f, g.abs, u.tRow, u.tableRow ]}>
                <Text style={ t.stat }>Kills</Text>
            </View>
            <View style={[ g.f, g.abs, u.tRow, u.tableRow ]}>
                <AnimateNumber style={ t.opt } value={props.statsOne.kills} timing="linear" countBy={150} interval={1} formatter={(val) => { return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); }} />
            </View>
            <View style={[ g.f, g.abs, u.tRow, u.tableRow ]}>
                <AnimateNumber style={ t.opt } value={props.statsTwo.kills} timing="linear" countBy={150} interval={1} formatter={(val) => { return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); }} />
            </View>
        </View>
        
        <View style={[ g.f_r, g.spb ]}>
            <View style={[ g.f, g.abs, u.tRow, u.tableRow ]}>
                <Text style={ t.stat }>Matches Played</Text>
            </View>
            <View style={[ g.f, g.abs, u.tRow, u.tableRow ]}>
                <AnimateNumber style={ t.opt } value={props.statsOne.matchesplayed} timing="linear" countBy={100} interval={1} formatter={(val) => { return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); }} />
            </View>
            <View style={[ g.f, g.abs, u.tRow, u.tableRow ]}>
                <AnimateNumber style={ t.opt } value={props.statsTwo.matchesplayed} timing="linear" countBy={100} interval={1} formatter={(val) => { return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); }} />
            </View>
        </View>

        <View style={[ g.f_r, g.spb ]}>
            <View style={[ g.f, g.abs, u.tRow, u.tableRow ]}>
                <Text style={ t.stat }>Minutes Played</Text>
            </View>
            <View style={[ g.f, g.abs, u.tRow, u.tableRow ]}>
                <AnimateNumber style={ t.opt } value={props.statsOne.minutesplayed} timing="linear" countBy={100} interval={1} formatter={(val) => { return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); }} />
            </View>
            <View style={[ g.f, g.abs, u.tRow, u.tableRow ]}>
                <AnimateNumber style={ t.opt } value={props.statsTwo.minutesplayed} timing="linear" countBy={100} interval={1} formatter={(val) => { return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); }} />
            </View>
        </View>

        <View style={[ g.f_r, g.spb ]}>
            <View style={[ g.f, g.abs, u.tRow, u.tableRow ]}>
                <Text style={ t.stat }>Place Top 1</Text>
            </View>
            <View style={[ g.f, g.abs, u.tRow, u.tableRow ]}>
                <AnimateNumber style={ t.opt } value={props.statsOne.placetop1} timing="linear" countBy={100} interval={1} formatter={(val) => { return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); }} />
            </View>
            <View style={[ g.f, g.abs, u.tRow, u.tableRow ]}>
                <AnimateNumber style={ t.opt } value={props.statsTwo.placetop1} timing="linear" countBy={100} interval={1} formatter={(val) => { return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); }} />
            </View>
        </View>

        <View style={[ g.f_r, g.spb ]}>
            <View style={[ g.f, g.abs, u.tRow, u.tableRow ]}>
                <Text style={ t.stat }>Place Top 3</Text>
            </View>
            <View style={[ g.f, g.abs, u.tRow, u.tableRow ]}>
                <AnimateNumber style={ t.opt } value={props.statsOne.placetop3} timing="linear" countBy={100} interval={1} formatter={(val) => { return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); }} />
            </View>
            <View style={[ g.f, g.abs, u.tRow, u.tableRow ]}>
                <AnimateNumber style={ t.opt } value={props.statsTwo.placetop3} timing="linear" countBy={100} interval={1} formatter={(val) => { return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); }} />
            </View>
        </View>

        <View style={[ g.f_r, g.spb ]}>
            <View style={[ g.f, g.abs, u.tRow, u.tableRow ]}>
                <Text style={ t.stat }>Place Top 10</Text>
            </View>
            <View style={[ g.f, g.abs, u.tRow, u.tableRow ]}>
                <AnimateNumber style={ t.opt } value={props.statsOne.placetop10} timing="linear" countBy={100} interval={1} formatter={(val) => { return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); }} />
            </View>
            <View style={[ g.f, g.abs, u.tRow, u.tableRow ]}>
                <AnimateNumber style={ t.opt } value={props.statsTwo.placetop10} timing="linear" countBy={100} interval={1} formatter={(val) => { return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); }} />
            </View>
        </View>

        <View style={[ g.f_r, g.spb ]}>
            <View style={[ g.f, g.abs, u.tRow, u.tableRow ]}>
                <Text style={ t.stat }>Place Top 25</Text>
            </View>
            <View style={[ g.f, g.abs, u.tRow, u.tableRow ]}>
                <AnimateNumber style={ t.opt } value={props.statsOne.placetop25} timing="linear" countBy={100} interval={1} formatter={(val) => { return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); }} />
            </View>
            <View style={[ g.f, g.abs, u.tRow, u.tableRow ]}>
                <AnimateNumber style={ t.opt } value={props.statsTwo.placetop25} timing="linear" countBy={100} interval={1} formatter={(val) => { return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); }} />
            </View>
        </View>

        <View style={[ g.f_r, g.spb ]}>
            <View style={[ g.f, g.abs, u.tRow, u.tableRow ]}>
                <Text style={ t.stat }>Players Outlived</Text>
            </View>
            <View style={[ g.f, g.abs, u.tRow, u.tableRow ]}>
                <AnimateNumber style={ t.opt } value={props.statsOne.playersoutlived} timing="linear" countBy={100} interval={1} formatter={(val) => { return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); }} />
            </View>
            <View style={[ g.f, g.abs, u.tRow, u.tableRow ]}>
                <AnimateNumber style={ t.opt } value={props.statsTwo.playersoutlived} timing="linear" countBy={100} interval={1} formatter={(val) => { return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); }} />
            </View>
        </View>

        <View style={[ g.f_r, g.spb ]}>
            <View style={[ g.f, g.abs, u.tRow, u.tableRow ]}>
                <Text style={ t.stat }>Total Score</Text>
            </View>
            <View style={[ g.f, g.abs, u.tRow, u.tableRow ]}>
                <AnimateNumber style={ t.opt } value={props.statsOne.score} timing="linear" countBy={1500} interval={1} formatter={(val) => { return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); }} />
            </View>
            <View style={[ g.f, g.abs, u.tRow, u.tableRow ]}>
                <AnimateNumber style={ t.opt } value={props.statsTwo.score} timing="linear" countBy={1500} interval={1} formatter={(val) => { return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); }} />
            </View>
        </View>

    </View>
);

export default CompareData;