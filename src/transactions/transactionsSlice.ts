import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ProffessionInitData} from '../data/professions/Proffession';

interface TransactionI {
    id: number;
    value: number;
    totalAfter: number;
}

interface TransactionsStateI {
    cash: number;
    list: TransactionI[];
}

const initialState: TransactionsStateI = {
    cash: 0,
    list: [],
};

export default createSlice({
    name: 'transactions',
    initialState,
    reducers: {
        add: (state, action: PayloadAction<number>): void => {
            const value = action.payload;

            state.cash += value;
            state.list.push({
                id: state.list.length + 1,
                value,
                totalAfter: state.cash,
            });
        },
        init: (state, action: PayloadAction<ProffessionInitData>): void => {
            const proffesionData = action.payload;

            state.cash = proffesionData.income + proffesionData.savings;
            state.list.length = 0;
        },
    },
});
