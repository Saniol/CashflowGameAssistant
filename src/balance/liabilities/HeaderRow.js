import React from 'react';
import {View, Text} from 'react-native';
import LayoutStyles from '../../global/LayoutStyles';
import ListStyles from '../../global/ListStyles';

const BalanceLiabilitiesRow = ({item}) => (
    <View style={ListStyles.listRow}>
        <View style={LayoutStyles.separator} />
        <Text style={ListStyles.headerRow}>{item.name}</Text>
        <Text style={ListStyles.headerRow}>{item.credit}</Text>
    </View>
);

export default BalanceLiabilitiesRow;
