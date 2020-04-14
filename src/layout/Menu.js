import React from 'react';
import {View, StyleSheet} from 'react-native';
import {ListItem} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../global/Colors';
import Lang from '../lang/pl';

const MenuStyles = StyleSheet.create({
    iconContainer: {
        width: 50,
    },
    container: {
        backgroundColor: Colors.background,
    },
    color: {
        color: 'black',
    },
});

const list = [
    {
        title: Lang.menuDashboard,
        icon: 'home',
        goTo: '/home',
    },
    {
        title: Lang.menuIncome,
        icon: 'money',
        goTo: '/income',
    },
    {
        title: Lang.menuBalance,
        icon: 'balance-scale',
        goTo: '/balance',
    },
    {
        title: Lang.menuTransactions,
        icon: 'history',
        goTo: '/transactions',
    },
    {
        title: Lang.menuNewGame,
        icon: 'plus-square',
        goTo: '/newGame',
    },
];

const MenuIcon = ({name}) => (
    <View style={MenuStyles.iconContainer}>
        <Icon name={name} size={24} style={MenuStyles.color} />
    </View>
);

const Menu = ({goTo}) => (
    <View>
        {list.map((item, i) => (
            <ListItem
                key={i}
                title={item.title}
                leftIcon={<MenuIcon name={item.icon} />}
                onPress={() => goTo(item.goTo)}
                containerStyle={MenuStyles.container}
                titleStyle={MenuStyles.color}
                bottomDivider
                chevron
            />
        ))}
    </View>
);

export default Menu;
