import React from 'react';
import {View, Text} from 'react-native';
import LayoutStyles from '../../global/LayoutStyles';
import ListStyles from '../../global/ListStyles';

const BalanceAssetsRow = ({item}) => (
    <View style={ListStyles.listRow}>
        <View style={LayoutStyles.separator} />
        <Text style={ListStyles.headerRow}>{item.name}</Text>
        <Text style={ListStyles.headerRow}>{String(item.contribution)}</Text>
        <Text style={ListStyles.headerRow}>{String(item.price)}</Text>
    </View>
);

export default BalanceAssetsRow;
