import React from 'react';
import { View, Text } from 'react-native';

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
                <Text style={ t.opt }>{ props.statsOne.kills.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }</Text>
            </View>
            <View style={[ g.f, g.abs, u.tRow, u.tableRow ]}>
                <Text style={ t.opt }>{ props.statsTwo.kills.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }</Text>
            </View>
        </View>
        
        <View style={[ g.f_r, g.spb ]}>
            <View style={[ g.f, g.abs, u.tRow, u.tableRow ]}>
                <Text style={ t.stat }>Matches Played</Text>
            </View>
            <View style={[ g.f, g.abs, u.tRow, u.tableRow ]}>
                <Text style={ t.opt }>{ props.statsOne.matchesplayed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }</Text>
            </View>
            <View style={[ g.f, g.abs, u.tRow, u.tableRow ]}>
                <Text style={ t.opt }>{ props.statsTwo.matchesplayed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }</Text>
            </View>
        </View>

        <View style={[ g.f_r, g.spb ]}>
            <View style={[ g.f, g.abs, u.tRow, u.tableRow ]}>
                <Text style={ t.stat }>Minutes Played</Text>
            </View>
            <View style={[ g.f, g.abs, u.tRow, u.tableRow ]}>
                <Text style={ t.opt }>{ props.statsOne.minutesplayed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }</Text>
            </View>
            <View style={[ g.f, g.abs, u.tRow, u.tableRow ]}>
                <Text style={ t.opt }>{ props.statsTwo.minutesplayed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }</Text>
            </View>
        </View>

        <View style={[ g.f_r, g.spb ]}>
            <View style={[ g.f, g.abs, u.tRow, u.tableRow ]}>
                <Text style={ t.stat }>Place Top 1</Text>
            </View>
            <View style={[ g.f, g.abs, u.tRow, u.tableRow ]}>
                <Text style={ t.opt }>{ props.statsOne.placetop1.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }</Text>
            </View>
            <View style={[ g.f, g.abs, u.tRow, u.tableRow ]}>
                <Text style={ t.opt }>{ props.statsTwo.placetop1.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }</Text>
            </View>
        </View>

        <View style={[ g.f_r, g.spb ]}>
            <View style={[ g.f, g.abs, u.tRow, u.tableRow ]}>
                <Text style={ t.stat }>Place Top 3</Text>
            </View>
            <View style={[ g.f, g.abs, u.tRow, u.tableRow ]}>
                <Text style={ t.opt }>{ props.statsOne.placetop3.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }</Text>
            </View>
            <View style={[ g.f, g.abs, u.tRow, u.tableRow ]}>
                <Text style={ t.opt }>{ props.statsTwo.placetop3.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }</Text>
            </View>
        </View>

        <View style={[ g.f_r, g.spb ]}>
            <View style={[ g.f, g.abs, u.tRow, u.tableRow ]}>
                <Text style={ t.stat }>Place Top 10</Text>
            </View>
            <View style={[ g.f, g.abs, u.tRow, u.tableRow ]}>
                <Text style={ t.opt }>{ props.statsOne.placetop10.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }</Text>
            </View>
            <View style={[ g.f, g.abs, u.tRow, u.tableRow ]}>
                <Text style={ t.opt }>{ props.statsTwo.placetop10.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }</Text>
            </View>
        </View>

        <View style={[ g.f_r, g.spb ]}>
            <View style={[ g.f, g.abs, u.tRow, u.tableRow ]}>
                <Text style={ t.stat }>Place Top 25</Text>
            </View>
            <View style={[ g.f, g.abs, u.tRow, u.tableRow ]}>
                <Text style={ t.opt }>{ props.statsOne.placetop25.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }</Text>
            </View>
            <View style={[ g.f, g.abs, u.tRow, u.tableRow ]}>
                <Text style={ t.opt }>{ props.statsTwo.placetop25.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }</Text>
            </View>
        </View>

        <View style={[ g.f_r, g.spb ]}>
            <View style={[ g.f, g.abs, u.tRow, u.tableRow ]}>
                <Text style={ t.stat }>Players Outlived</Text>
            </View>
            <View style={[ g.f, g.abs, u.tRow, u.tableRow ]}>
                <Text style={ t.opt }>{ props.statsOne.playersoutlived.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }</Text>
            </View>
            <View style={[ g.f, g.abs, u.tRow, u.tableRow ]}>
                <Text style={ t.opt }>{ props.statsTwo.playersoutlived.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }</Text>
            </View>
        </View>

        <View style={[ g.f_r, g.spb ]}>
            <View style={[ g.f, g.abs, u.tRow, u.tableRow ]}>
                <Text style={ t.stat }>Total Score</Text>
            </View>
            <View style={[ g.f, g.abs, u.tRow, u.tableRow ]}>
                <Text style={ t.opt }>{ props.statsOne.score.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }</Text>
            </View>
            <View style={[ g.f, g.abs, u.tRow, u.tableRow ]}>
                <Text style={ t.opt }>{ props.statsTwo.score.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }</Text>
            </View>
        </View>

    </View>
);

export default CompareData;