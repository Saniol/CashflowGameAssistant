import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ProffessionInitData} from '../data/professions/Proffession';

const initialState = {
    children: {count: 0, costPerChild: 0},
    staticExpenses: {taxes: 0, other: 0},
    baseIncome: 0,
    networkMarketing: 0,
};

export default createSlice({
    name: 'balance',
    initialState,
    reducers: {
        addChild: (state): void => {
            state.children.count += 1;
        },
        addNetworkMarketing: (state): void => {
            state.networkMarketing += 1;
        },
        setInitValues: (
            state,
            action: PayloadAction<ProffessionInitData>,
        ): void => {
            const proffesionData = action.payload;

            state.children.count = 0;
            state.children.costPerChild = proffesionData.expenses.child;

            state.staticExpenses.taxes = proffesionData.expenses.taxes;
            state.staticExpenses.other = proffesionData.expenses.other;

            state.baseIncome = proffesionData.income;
            state.networkMarketing = 0;
        },
    },
});
