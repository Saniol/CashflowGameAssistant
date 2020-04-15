import React from 'react';
import {StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';
import {useHistory} from 'react-router-native';
import {ColorName} from '../global/Colors';
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

interface Props {
    color: ColorName;
    title: string;
    to?: string;
}

const ActionButton: React.FC<Props> = ({color, title, to}) => {
    const history = useHistory();

    return (
        <Button
            buttonStyle={[styles.button, Backgrounds[color]]}
            containerStyle={styles.buttonContainer}
            title={title}
            onPress={() => to && history.push(to)}
        />
    );
};

export default ActionButton;
