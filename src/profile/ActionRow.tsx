import React from 'react';
import {StyleSheet, View} from 'react-native';

const styles = StyleSheet.create({
    actionRow: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
});

const ActionRow: React.FC = ({children}) => (
    <View style={styles.actionRow}>{children}</View>
);

export default ActionRow;
