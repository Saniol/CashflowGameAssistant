import {StyleSheet} from 'react-native';
import Colors, {ColorName} from './Colors';

type BackgroundDef = {[name in ColorName]: {backgroundColor: string}};

const backgrounds: BackgroundDef = {
    background: {
        backgroundColor: Colors.background,
    },
    light: {
        backgroundColor: Colors.light,
    },
    dark: {
        backgroundColor: Colors.dark,
    },
    black: {
        backgroundColor: Colors.black,
    },
    red: {
        backgroundColor: Colors.red,
    },
    green: {
        backgroundColor: Colors.green,
    },
    darkGreen: {
        backgroundColor: Colors.darkGreen,
    },
    yellow: {
        backgroundColor: Colors.yellow,
    },
    blue: {
        backgroundColor: Colors.blue,
    },
    purple: {
        backgroundColor: Colors.purple,
    },
    darkPurple: {
        backgroundColor: Colors.darkPurple,
    },
    orange: {
        backgroundColor: Colors.orange,
    },
};

export default StyleSheet.create(backgrounds);
