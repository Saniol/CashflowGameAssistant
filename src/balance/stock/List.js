import React from 'react';
import {View, FlatList} from 'react-native';
import Lang from '../../lang/pl';
import ListStyles from '../../global/ListStyles';
import BalanceStockHeaderRow from './HeaderRow';
import BalanceStockRow from './Row';

const listHeader = {
    id: 'header',
    name: Lang.balanceStockShares,
    count: Lang.balanceStockSharesCount,
    price: Lang.balanceStockSharesPrice,
};

const BalanceStockList = () => (
    <View style={ListStyles.listContainer}>
        <View style={ListStyles.listHeader}>
            <FlatList
                data={[listHeader]}
                renderItem={BalanceStockHeaderRow}
                keyExtractor={item => String(item.id)}
            />
        </View>
        <View style={ListStyles.listBody}>
            <FlatList
                data={[
                    {id: 1, name: 'GRO4US', count: 500, price: 5},
                    {id: 2, name: 'ON2U', count: 100, price: 10},
                ]}
                renderItem={BalanceStockRow}
                keyExtractor={item => String(item.id)}
            />
        </View>
    </View>
);

export default BalanceStockList;
