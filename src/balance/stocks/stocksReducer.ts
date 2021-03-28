import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface StockI {
    description: string;
    units: number;
    costPerUnit: number;
}

const initialState: StockI[] = [];

export default createSlice({
    name: 'stocks',
    initialState,
    reducers: {
        add: (state, action: PayloadAction<StockI>): void => {
            state.push(action.payload);
        },
        remove: (state, action: PayloadAction<number>): void => {
            state.splice(action.payload, 1);
        },
    },
});
