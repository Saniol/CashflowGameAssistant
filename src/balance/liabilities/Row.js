import React from 'react';
import {View, Text} from 'react-native';
import LayoutStyles from '../../global/LayoutStyles';
import ListStyles from '../../global/ListStyles';

const BalanceLiabilitiesHeaderRow = ({item}) => (
    <View style={ListStyles.listRow}>
        <View style={LayoutStyles.separator} />
        <Text style={LayoutStyles.flexItem}>{item.name}</Text>
        <Text style={LayoutStyles.flexItem}>
            {String(item.price - item.contribution)}$
        </Text>
    </View>
);

export default BalanceLiabilitiesHeaderRow;
