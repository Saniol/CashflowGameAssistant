import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    label: {
        fontWeight: 'bold',
    },
});

export default ({style, label, text}) => (
    <View style={style}>
        <Text style={styles.label}>{label} </Text>
        <Text>{text}</Text>
    </View>
);
