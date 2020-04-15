import React from 'react';
import {View, Text, StyleSheet, ViewStyle} from 'react-native';

const styles = StyleSheet.create({
    label: {
        fontWeight: 'bold',
    },
});

interface Props {
    style?: ViewStyle;
    label: string;
    text: string;
}

const DisplayField: React.FC<Props> = ({style, label, text}) => (
    <View style={style}>
        <Text style={styles.label}>{label} </Text>
        <Text>{text}</Text>
    </View>
);

export default DisplayField;
