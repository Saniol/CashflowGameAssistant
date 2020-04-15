import React from 'react';
import {FlatList, View, Text, StyleSheet} from 'react-native';
import Lang from '../lang/pl';
import LayoutStyles from '../global/LayoutStyles';
import TransactionRow from './Row';

const ListStyles = StyleSheet.create({
    listColumn: {
        flex: 1,
        paddingBottom: 24,
    },
});

const TransactionsList: React.FC = () => (
    <View style={LayoutStyles.container}>
        <Text style={LayoutStyles.header}>{Lang.transactionsHeader}</Text>
        <View style={LayoutStyles.flexItem}>
            <FlatList
                style={ListStyles.listColumn}
                data={[
                    {id: 1, value: 1000, summary: 1000},
                    {id: 2, value: 1000, summary: 2000},
                    {id: 3, value: -1500, summary: 500},
                    {id: 4, value: 1000, summary: 1500},
                    {id: 5, value: 3000, summary: 4500},
                    {id: 6, value: -4000, summary: 500},
                    {id: 7, value: 1000, summary: 1000},
                    {id: 8, value: 1000, summary: 1000},
                    {id: 9, value: 1000, summary: 1000},
                    {id: 10, value: 1000, summary: 1000},
                    {id: 11, value: 1000, summary: 1000},
                    {id: 12, value: 1000, summary: 1000},
                    {id: 13, value: 1000, summary: 1000},
                    {id: 14, value: 1000, summary: 1000},
                    {id: 15, value: 1000, summary: 1000},
                    {id: 16, value: 1000, summary: 1000},
                    {id: 17, value: 1000, summary: 1000},
                    {id: 18, value: 1000, summary: 1000},
                    {id: 19, value: 1000, summary: 1000},
                    {id: 20, value: 1000, summary: 1000},
                    {id: 21, value: 1000, summary: 1000},
                    {id: 22, value: 1000, summary: 1000},
                    {id: 23, value: 1000, summary: 1000},
                    {id: 24, value: 1000, summary: 1000},
                    {id: 25, value: 1000, summary: 1000},
                    {id: 26, value: 1000, summary: 1000},
                    {id: 27, value: 1000, summary: 1000},
                    {id: 28, value: 1000, summary: 1000},
                    {id: 29, value: 1000, summary: 1000},
                    {id: 30, value: 1000, summary: 1000},
                    {id: 31, value: 1000, summary: 1000},
                    {id: 32, value: 1000, summary: 1000},
                    {id: 33, value: 1000, summary: 1000},
                    {id: 34, value: 1000, summary: 1000},
                    {id: 35, value: 1000, summary: 1000},
                    {id: 36, value: 1000, summary: 1000},
                    {id: 37, value: 1000, summary: 1000},
                    {id: 38, value: 1000, summary: 3000},
                    {id: 39, value: -1000, summary: 2000},
                ]}
                renderItem={TransactionRow}
                keyExtractor={item => String(item.id)}
            />
        </View>
        <Text style={LayoutStyles.footer}>{Lang.transactionsSum} 2000$</Text>
    </View>
);

export default TransactionsList;
