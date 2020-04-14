import React from 'react';
import {View, FlatList} from 'react-native';
import Lang from '../../lang/pl';
import ListStyles from '../../global/ListStyles';
import BusinessesMock from '../BusinessesMock';
import BusinessIncomeHeaderRow from './HeaderRow';
import BusinessIncomeRow from './Row';

const listHeader = {
    id: 'header',
    name: Lang.incomeBusiness,
    income: Lang.incomeCashflow,
};

const BusinessIncomeList = () => (
    <View style={ListStyles.listContainer}>
        <View style={ListStyles.listHeader}>
            <FlatList
                data={[listHeader]}
                renderItem={BusinessIncomeHeaderRow}
                keyExtractor={item => String(item.id)}
            />
        </View>
        <View style={ListStyles.listBody}>
            <FlatList
                data={BusinessesMock}
                renderItem={BusinessIncomeRow}
                keyExtractor={item => String(item.id)}
            />
        </View>
    </View>
);

export default BusinessIncomeList;
