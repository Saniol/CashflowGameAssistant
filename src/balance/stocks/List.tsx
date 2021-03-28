import React from 'react';
import {View, FlatList} from 'react-native';
import Lang from '../../lang/pl';
import ListStyles from '../../global/ListStyles';
import {MockData} from '../../data/Stock';
import BalanceStockHeaderRow from './HeaderRow';
import BalanceStockRow from './Row';

const listHeader = {
    id: 'header',
    name: Lang.balanceStockShares,
    count: Lang.balanceStockSharesCount,
    price: Lang.balanceStockSharesPrice,
};

const BalanceStockList: React.FC = () => (
    <View style={ListStyles.listContainer}>
        <View style={ListStyles.listHeader}>
            <FlatList
                data={[listHeader]}
                renderItem={BalanceStockHeaderRow}
                keyExtractor={item => item.id}
            />
        </View>
        <View style={ListStyles.listBody}>
            <FlatList
                data={MockData}
                renderItem={BalanceStockRow}
                keyExtractor={item => String(item.id)}
            />
        </View>
    </View>
);

export default BalanceStockList;
