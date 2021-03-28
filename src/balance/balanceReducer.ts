import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    children: {count: 0, costPerChild: 0},
    staticExpenses: {taxes: 0, other: 0},
    baseIncome: 0,
    networkMarketing: false,
    cash: 0,
};

export default createSlice({
    name: 'balance',
    initialState,
    reducers: {},
});
