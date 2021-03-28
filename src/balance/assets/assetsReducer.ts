import {createSlice} from '@reduxjs/toolkit';

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
    reducers: {},
});
