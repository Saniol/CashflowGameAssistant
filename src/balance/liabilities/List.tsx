import React from 'react';
import {View, FlatList} from 'react-native';
import Lang from '../../lang/pl';
import ListStyles from '../../global/ListStyles';
import {MockData} from '../../data/Business';
import BalanceLiabilitiesHeaderRow from './HeaderRow';
import BalanceLiabilitiesRow from './Row';

const listHeader = {
    id: 'header',
    name: Lang.balanceBusiness,
    credit: Lang.balanceBusinessCredit,
};

const BalanceLiabilitiesList: React.FC = () => (
    <View style={ListStyles.listContainer}>
        <View style={ListStyles.listHeader}>
            <FlatList
                data={[listHeader]}
                renderItem={BalanceLiabilitiesHeaderRow}
                keyExtractor={item => String(item.id)}
            />
        </View>
        <View style={ListStyles.listBody}>
            <FlatList
                data={MockData}
                renderItem={BalanceLiabilitiesRow}
                keyExtractor={item => String(item.id)}
            />
        </View>
    </View>
);

export default BalanceLiabilitiesList;
