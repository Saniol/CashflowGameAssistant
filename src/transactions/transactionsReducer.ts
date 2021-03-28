import {createSlice} from '@reduxjs/toolkit';

interface TransactionI {
    id: number;
    value: number;
    totalAfter: number;
}

const initialState: TransactionI[] = [];

export default createSlice({
    name: 'transactions',
    initialState,
    reducers: {},
});
