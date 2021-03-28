import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Lang from '../lang/pl';
import LayoutStyles from '../global/LayoutStyles';
import DisplayField from '../global/DisplayField';
import StockList from './stocks/List';
import BusinessAssetsList from './assets/List';
import BusinessLiabilitiesList from './liabilities/List';

const ViewStyles = StyleSheet.create({
    assetsContainer: {
        flex: undefined,
        height: 40,
    },
    liabilitiesContainer: {
        flex: undefined,
        height: 120,
    },
});

const BalanceView: React.FC = () => (
    <View style={LayoutStyles.container}>
        <Text style={LayoutStyles.header}>{Lang.balanceHeader}</Text>
        <Text style={LayoutStyles.subheader}>{Lang.balanceAssetsHeader}</Text>
        <View style={LayoutStyles.columnsContainer}>
            <View
                style={[
                    LayoutStyles.rowsContainer,
                    ViewStyles.assetsContainer,
                ]}>
                <View style={LayoutStyles.flexItem}>
                    <DisplayField label={Lang.balanceSavings} text="600$" />
                </View>
                <View style={LayoutStyles.flexItem}>
                    <DisplayField label={Lang.balanceGold} text="5" />
                </View>
            </View>
            <View style={LayoutStyles.flexItemX2}>
                <StockList />
            </View>
            <View style={LayoutStyles.flexItemX5}>
                <BusinessAssetsList />
            </View>
            <Text style={LayoutStyles.subheader}>
                {Lang.balanceLiabilitiesHeader}
            </Text>
            <View
                style={[
                    LayoutStyles.rowsContainer,
                    ViewStyles.liabilitiesContainer,
                ]}>
                <View style={LayoutStyles.flexItem}>
                    <DisplayField label={Lang.balanceMortgage} text="24000$" />
                    <DisplayField
                        label={Lang.balanceStudentLoad}
                        text="9000$"
                    />
                    <DisplayField label={Lang.balanceCarLoan} text="3000$" />
                </View>
                <View style={LayoutStyles.flexItem}>
                    <DisplayField
                        label={Lang.balanceCreditCards}
                        text="2000$"
                    />
                    <DisplayField label={Lang.balanceBankLoad} text="1000$" />
                </View>
            </View>
            <View style={LayoutStyles.flexItemX5}>
                <BusinessLiabilitiesList />
            </View>
        </View>
    </View>
);

export default BalanceView;
