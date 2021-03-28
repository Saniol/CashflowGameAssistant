import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface TransactionI {
    id: number;
    value: number;
    totalAfter: number;
}

const initialState: TransactionI[] = [];

export default createSlice({
    name: 'transactions',
    initialState,
    reducers: {
        add: (state, action: PayloadAction<number>): void => {
            const lastTotal = state.length
                ? state[state.length - 1].totalAfter
                : 0;
            const value = action.payload;

            state.push({
                id: state.length + 1,
                value,
                totalAfter: lastTotal + value,
            });
        },
    },
});
