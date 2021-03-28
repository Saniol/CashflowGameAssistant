import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface AssetI {
    description: string;
    totalCost: number;
    mortgage: number;
    income: number;
}

const initialState: AssetI[] = [];

export default createSlice({
    name: 'assets',
    initialState,
    reducers: {
        add: (state, action: PayloadAction<AssetI>): void => {
            state.push(action.payload);
        },
        remove: (state, action: PayloadAction<number>): void => {
            state.splice(action.payload, 1);
        },
    },
});
