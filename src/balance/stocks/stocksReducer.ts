import {createSlice} from '@reduxjs/toolkit';

interface StockI {
    description: string;
    units: number;
    costPerUnit: number;
}

const initialState: StockI[] = [];

export default createSlice({
    name: 'stocks',
    initialState,
    reducers: {},
});
