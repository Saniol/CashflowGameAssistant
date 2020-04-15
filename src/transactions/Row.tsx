import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Colors from '../global/Colors';
import LayoutStyles from '../global/LayoutStyles';
import ListStyles from '../global/ListStyles';

const RowStyles = StyleSheet.create({
    positive: {
        flex: 1,
        color: Colors.green,
    },
    negative: {
        flex: 1,
        color: Colors.red,
    },
    summary: {
        flex: 2,
        color: Colors.black,
    },
});

interface Props {
    item: {
        id: number;
        value: number;
        summary: number;
    };
}

const TransactionRow: React.FC<Props> = ({item}) => (
    <View style={ListStyles.listRow}>
        <View style={LayoutStyles.separator} />
        <Text style={item.value >= 0 ? RowStyles.positive : RowStyles.negative}>
            {String(item.value)}$
        </Text>
        <Text style={RowStyles.summary}>{String(item.summary)}$</Text>
    </View>
);

export default TransactionRow;
