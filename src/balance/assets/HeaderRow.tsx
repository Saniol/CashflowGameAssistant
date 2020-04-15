import React from 'react';
import {View, Text} from 'react-native';
import LayoutStyles from '../../global/LayoutStyles';
import ListStyles from '../../global/ListStyles';

interface Props {
    item: {
        id: string;
        name: string;
        contribution: string;
        price: string;
    };
}

const BalanceAssetsRow: React.FC<Props> = ({item}) => (
    <View style={ListStyles.listRow}>
        <View style={LayoutStyles.separator} />
        <Text style={ListStyles.headerRow}>{item.name}</Text>
        <Text style={ListStyles.headerRow}>{item.contribution}</Text>
        <Text style={ListStyles.headerRow}>{item.price}</Text>
    </View>
);

export default BalanceAssetsRow;
