import React from 'react';
import {View, Text} from 'react-native';
import Lang from '../lang/pl';
import LayoutStyles from '../global/LayoutStyles';
import ActionRow from './ActionRow';
import ActionButton from './ActionButton';

const OtherOperations = () => (
    <View style={LayoutStyles.container}>
        <Text style={LayoutStyles.header}>{Lang.otherOperationsHeader}</Text>
        <ActionRow>
            <ActionButton color="yellow" title={Lang.otherOperationsCharity} />
            <ActionButton
                color="green"
                title={Lang.otherOperationsNewbornBaby}
            />
        </ActionRow>
        <ActionRow>
            <ActionButton color="red" title={Lang.otherOperationsFired} />
            <ActionButton
                color="purple"
                title={Lang.otherOperationsBack}
                to="/home"
            />
        </ActionRow>
        <View style={LayoutStyles.flexItem} />
        <View style={LayoutStyles.flexItem} />
    </View>
);

export default OtherOperations;
