import React from 'react';
import {View, Text} from 'react-native';
import Lang from '../lang/pl';
import LayoutStyles from '../global/LayoutStyles';
import DisplayField from '../global/DisplayField';
import BusinessIncomeList from './business/List';

const IncomeView = () => (
    <View style={LayoutStyles.container}>
        <Text style={LayoutStyles.header}>{Lang.incomeHeader}</Text>
        <View style={LayoutStyles.columnsContainer}>
            <View style={LayoutStyles.flexItem}>
                <Text style={LayoutStyles.subheader}>
                    {Lang.incomeIncomeHeader}
                </Text>
                <DisplayField label={Lang.incomeSalary} text="2000$" />
                <BusinessIncomeList />
            </View>
            <View style={LayoutStyles.flexItem}>
                <Text style={LayoutStyles.subheader}>
                    {Lang.incomeExpensesHeader}
                </Text>
                <DisplayField label={Lang.incomeTaxes} text="400$" />
                <DisplayField label={Lang.incomeMortgage} text="300$" />
                <DisplayField label={Lang.incomeStudentLoan} text="300$" />
                <DisplayField label={Lang.incomeCarLoan} text="200$" />
                <DisplayField label={Lang.incomeCreditCards} text="200$" />
                <DisplayField label={Lang.incomeOtherExpenses} text="300$" />
                <DisplayField label={Lang.incomeBankLoan} text="100$" />
                <DisplayField
                    label={Lang.incomeChildrenExpenses + ' (2)'}
                    text="200$"
                />
            </View>
        </View>
    </View>
);

export default IncomeView;
