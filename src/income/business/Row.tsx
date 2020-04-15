import React from 'react';
import {View, Text} from 'react-native';
import LayoutStyles from '../../global/LayoutStyles';
import ListStyles from '../../global/ListStyles';
import {BusinessItem} from '../../data/Business';

interface Props {
    item: BusinessItem;
}

const BusinessIncomeRow: React.FC<Props> = ({item}) => (
    <View style={ListStyles.listRow}>
        <View style={LayoutStyles.separator} />
        <Text style={LayoutStyles.flexItem}>{item.name}</Text>
        <Text style={LayoutStyles.flexItem}>{String(item.income)}$</Text>
    </View>
);

export default BusinessIncomeRow;
