import React, {useState, useCallback} from 'react';
import {View, SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {Header} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useHistory} from 'react-router-native';
import Lang from '../lang/pl';
import Backgrounds from '../global/Backgrounds';
import Colors from '../global/Colors';
import LayoutStyles from '../global/LayoutStyles';
import Menu from './Menu';

const ContainerStyles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        position: 'relative',
    },
    header: {
        height: 50,
        paddingTop: 0,
    },
    title: {
        color: Colors.background,
        fontSize: 18,
        fontWeight: 'bold',
    },
});

const AppContainer: React.FC = ({children}) => {
    const [menuVisible, setMenuVisible] = useState(false);
    const history = useHistory();
    const goTo = useCallback(
        path => {
            history.push(path);
            setMenuVisible(false);
        },
        [history, setMenuVisible],
    );
    const currentPathname = history.location.pathname;

    return (
        <View style={[ContainerStyles.container, Backgrounds.light]}>
            <Header
                containerStyle={[ContainerStyles.header, Backgrounds.dark]}
                centerComponent={{
                    text: Lang.menuHeader,
                    style: ContainerStyles.title,
                }}
                rightComponent={
                    <Icon
                        testID="headerNavicon"
                        name={menuVisible ? 'times' : 'navicon'}
                        size={36}
                        color={Colors.light}
                        onPress={() => setMenuVisible(!menuVisible)}
                    />
                }
                leftComponent={
                    menuVisible || currentPathname === '/home' ? (
                        undefined
                    ) : (
                        <Icon
                            name="arrow-left"
                            size={24}
                            color={Colors.light}
                            onPress={() => goTo('/')}
                        />
                    )
                }
            />
            <StatusBar hidden />
            <SafeAreaView style={LayoutStyles.flexItem}>
                {menuVisible ? (
                    <Menu testID="mainMenu" goTo={goTo} />
                ) : (
                    children
                )}
            </SafeAreaView>
        </View>
    );
};

export default AppContainer;
