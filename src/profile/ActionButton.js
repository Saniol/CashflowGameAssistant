import React from 'react';
import {StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';
import {useHistory} from 'react-router-native';
import Backgrounds from '../global/Backgrounds';

const styles = StyleSheet.create({
    button: {
        borderRadius: 0,
        flex: 1,
    },
    buttonContainer: {
        flex: 1,
    },
});

const ActionButton = ({color, title, to}) => {
    const history = useHistory();

    return (
        <Button
            buttonStyle={[styles.button, Backgrounds[color]]}
            containerStyle={styles.buttonContainer}
            title={title}
            onPress={() => history.push(to)}
        />
    );
};

export default ActionButton;
