import {createSlice} from '@reduxjs/toolkit';

interface LiabilityValuesI {
    total: number;
    monthly: number;
}

interface LiabilitiesI {
    mortgage: LiabilityValuesI;
    studentLoan: LiabilityValuesI;
    carLoan: LiabilityValuesI;
    creditCards: LiabilityValuesI;
    bankLoan: LiabilityValuesI;
}

const initialState: LiabilitiesI = {
    mortgage: {total: 0, monthly: 0},
    studentLoan: {total: 0, monthly: 0},
    carLoan: {total: 0, monthly: 0},
    creditCards: {total: 0, monthly: 0},
    bankLoan: {total: 0, monthly: 0},
};

export default createSlice({
    name: 'liabilities',
    initialState,
    reducers: {},
});
