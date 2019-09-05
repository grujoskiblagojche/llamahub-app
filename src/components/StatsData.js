import React from 'react';
import { View, Text } from 'react-native';

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
                <Text style={ t.opt }>{ props.stats.kills.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }</Text>
            </View>
        </View>
        
        <View style={[ g.f_r, g.spb ]}>
            <View style={[ g.f, g.abs, u.tRow, u.tableRow ]}>
                <Text style={ t.stat }>Matches Played</Text>
            </View>
            <View style={[ g.f, g.abs, u.tRow, u.tableRow ]}>
                <Text style={ t.opt }>{ props.stats.matchesplayed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }</Text>
            </View>
        </View>

        <View style={[ g.f_r, g.spb ]}>
            <View style={[ g.f, g.abs, u.tRow, u.tableRow ]}>
                <Text style={ t.stat }>Minutes Played</Text>
            </View>
            <View style={[ g.f, g.abs, u.tRow, u.tableRow ]}>
                <Text style={ t.opt }>{ props.stats.minutesplayed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }</Text>
            </View>
        </View>

        <View style={[ g.f_r, g.spb ]}>
            <View style={[ g.f, g.abs, u.tRow, u.tableRow ]}>
                <Text style={ t.stat }>Place Top 1</Text>
            </View>
            <View style={[ g.f, g.abs, u.tRow, u.tableRow ]}>
                <Text style={ t.opt }>{ props.stats.placetop1.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }</Text>
            </View>
        </View>

        <View style={[ g.f_r, g.spb ]}>
            <View style={[ g.f, g.abs, u.tRow, u.tableRow ]}>
                <Text style={ t.stat }>Place Top 3</Text>
            </View>
            <View style={[ g.f, g.abs, u.tRow, u.tableRow ]}>
                <Text style={ t.opt }>{ props.stats.placetop3.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }</Text>
            </View>
        </View>

        <View style={[ g.f_r, g.spb ]}>
            <View style={[ g.f, g.abs, u.tRow, u.tableRow ]}>
                <Text style={ t.stat }>Place Top 10</Text>
            </View>
            <View style={[ g.f, g.abs, u.tRow, u.tableRow ]}>
                <Text style={ t.opt }>{ props.stats.placetop10.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }</Text>
            </View>
        </View>

        <View style={[ g.f_r, g.spb ]}>
            <View style={[ g.f, g.abs, u.tRow, u.tableRow ]}>
                <Text style={ t.stat }>Place Top 25</Text>
            </View>
            <View style={[ g.f, g.abs, u.tRow, u.tableRow ]}>
                <Text style={ t.opt }>{ props.stats.placetop25.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }</Text>
            </View>
        </View>

        <View style={[ g.f_r, g.spb ]}>
            <View style={[ g.f, g.abs, u.tRow, u.tableRow ]}>
                <Text style={ t.stat }>Players Outlived</Text>
            </View>
            <View style={[ g.f, g.abs, u.tRow, u.tableRow ]}>
                <Text style={ t.opt }>{ props.stats.playersoutlived.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }</Text>
            </View>
        </View>

        <View style={[ g.f_r, g.spb ]}>
            <View style={[ g.f, g.abs, u.tRow, u.tableRow ]}>
                <Text style={ t.stat }>Total Score</Text>
            </View>
            <View style={[ g.f, g.abs, u.tRow, u.tableRow ]}>
                <Text style={ t.opt }>{ props.stats.score.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }</Text>
            </View>
        </View>

    </View>
);

export default StatsData;