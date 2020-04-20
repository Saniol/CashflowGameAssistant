import React, {useState, useCallback} from 'react';
import {View, StyleSheet, Picker, Text, Button} from 'react-native';
import {useHistory} from 'react-router-native';
import Lang from '../lang/pl';
import Proffessions from '../data/professions';
import Colors from '../global/Colors';
import Backgrounds from '../global/Backgrounds';
import LayoutStyles from '../global/LayoutStyles';

const NewGameStyles = StyleSheet.create({
    picker: {
        marginBottom: 18,
    },
});

const NewGame: React.FC = () => {
    const defaultValue = Proffessions[0].type;
    const [proffession, setProffession] = useState(defaultValue);
    const history = useHistory();
    const goToDashboard = useCallback(() => {
        history.push('/home');
    }, [history]);

    return (
        <View style={LayoutStyles.container}>
            <Text style={LayoutStyles.header}>{Lang.newGameHeader}</Text>
            <Text>{Lang.newGameSelectProfession}</Text>
            <Picker
                testID="newGameProffessionPicker"
                selectedValue={proffession}
                style={[Backgrounds.background, NewGameStyles.picker]}
                onValueChange={itemValue => setProffession(itemValue)}>
                {Proffessions.map(proffessionDefinition => (
                    <Picker.Item
                        key={proffessionDefinition.type}
                        label={proffessionDefinition.name}
                        value={proffessionDefinition.type}
                    />
                ))}
            </Picker>
            <Button
                testID="newGameStartButton"
                title={Lang.newGameStart}
                color={Colors.dark}
                onPress={() => {
                    goToDashboard();
                }}
            />
        </View>
    );
};

export default NewGame;
