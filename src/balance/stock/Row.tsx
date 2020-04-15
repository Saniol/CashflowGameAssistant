import React from 'react';
import {View, Text} from 'react-native';
import LayoutStyles from '../../global/LayoutStyles';
import ListStyles from '../../global/ListStyles';
import {StockItem} from '../../data/Stock';

interface Props {
    item: StockItem;
}

const BalanceStockHeaderRow: React.FC<Props> = ({item}) => (
    <View style={ListStyles.listRow}>
        <View style={LayoutStyles.separator} />
        <Text style={LayoutStyles.flexItem}>{item.name}</Text>
        <Text style={LayoutStyles.flexItem}>{String(item.count)}$</Text>
        <Text style={LayoutStyles.flexItem}>{String(item.price)}$</Text>
    </View>
);

export default BalanceStockHeaderRow;
