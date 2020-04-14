import React from 'react';
import {View, FlatList} from 'react-native';
import Lang from '../../lang/pl';
import ListStyles from '../../global/ListStyles';
import BusinessesMock from '../../income/BusinessesMock';
import BalanceAssetsHeaderRow from './HeaderRow';
import BalanceAssetsRow from './Row';

const listHeader = {
    id: 'header',
    name: Lang.balanceBusiness,
    contribution: Lang.balanceBusinessContribution,
    price: Lang.balanceBusinessPrice,
};

const BalanceAssetsList = () => (
    <View style={ListStyles.listContainer}>
        <View style={ListStyles.bigListHeader}>
            <FlatList
                data={[listHeader]}
                renderItem={BalanceAssetsHeaderRow}
                keyExtractor={item => String(item.id)}
            />
        </View>
        <View style={ListStyles.listBody}>
            <FlatList
                data={BusinessesMock}
                renderItem={BalanceAssetsRow}
                keyExtractor={item => String(item.id)}
            />
        </View>
    </View>
);

export default BalanceAssetsList;
