import React from 'react';
import {View, StyleSheet} from 'react-native';
import Lang from '../lang/pl';
import Backgrounds from '../global/Backgrounds';
import LayoutStyles from '../global/LayoutStyles';
import DisplayField from '../global/DisplayField';
import ActionRow from './ActionRow';
import ActionButton from './ActionButton';

const DashboardStyles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        flexWrap: 'wrap',
    },
    summaryColumn: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        paddingHorizontal: 16,
    },
});

const Dashboard: React.FC = () => (
    <View style={DashboardStyles.container}>
        <View style={LayoutStyles.rowsContainer}>
            <View style={[DashboardStyles.summaryColumn, Backgrounds.light]}>
                <DisplayField
                    label={Lang.dashboardProfession}
                    text="Nauczyciel"
                />
                <DisplayField label={Lang.dashboardAuditor} text="Martyna :)" />
                <DisplayField
                    label={Lang.dashboardDream}
                    text="Założyć własną galerię sztuki współczesnej
                w Krakowie"
                />
            </View>
            <View style={[DashboardStyles.summaryColumn, Backgrounds.light]}>
                <DisplayField label={Lang.dashboardCash} text="800$" />
                <DisplayField
                    label={Lang.dashboardMonthlyCashflow}
                    text="700$"
                />
                <DisplayField label={Lang.dashboardPassiveIncome} text="200$" />
            </View>
        </View>
        <View style={LayoutStyles.boldSeparator} />
        <ActionRow>
            <ActionButton color="yellow" title={Lang.dashboardCashflow} />
            <ActionButton color="green" title={Lang.dashboardNewTransaction} />
        </ActionRow>
        <ActionRow>
            <ActionButton color="red" title={Lang.dashboardNewExpense} />
            <ActionButton
                color="purple"
                title={Lang.dashboardOther}
                to="/other"
            />
        </ActionRow>
        <ActionRow>
            <ActionButton color="darkGreen" title={Lang.dashboardNewLoan} />
            <ActionButton
                color="blue"
                title={Lang.dashboardIncomeStatement}
                to="/income"
            />
        </ActionRow>
        <ActionRow>
            <ActionButton
                color="darkPurple"
                title={Lang.dashboardBalanceSheet}
                to="/balance"
            />
            <ActionButton
                color="orange"
                title={Lang.dashboardTransactions}
                to="/transactions"
            />
        </ActionRow>
    </View>
);

export default Dashboard;
