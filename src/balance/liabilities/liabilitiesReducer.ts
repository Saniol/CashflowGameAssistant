import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ProffessionInitData} from '../../data/professions/Proffession';

interface LiabilityValuesI {
    total: number;
    monthly: number;
}

type LiabilityType =
    | 'mortgage'
    | 'studentLoan'
    | 'carLoan'
    | 'creditCards'
    | 'bankLoan';

const initialState: Record<LiabilityType, LiabilityValuesI> = {
    mortgage: {total: 0, monthly: 0},
    studentLoan: {total: 0, monthly: 0},
    carLoan: {total: 0, monthly: 0},
    creditCards: {total: 0, monthly: 0},
    bankLoan: {total: 0, monthly: 0},
};

export default createSlice({
    name: 'liabilities',
    initialState,
    reducers: {
        payOff: (
            state,
            action: PayloadAction<{type: LiabilityType; value?: number}>,
        ): void => {
            const {type, value} = action.payload;

            if (type === 'bankLoan' && state.bankLoan.total) {
                const {total, monthly} = state.bankLoan;

                state.bankLoan = {
                    total: value ? total - value : 0,
                    monthly: value ? monthly - value / 10 : 0,
                };

                return;
            }

            state[type] = {total: 0, monthly: 0};
        },
        takeBankLoan: (state, action: PayloadAction<number>): void => {
            const loanValue = action.payload;
            const {total, monthly} = state.bankLoan;

            state.bankLoan = {
                total: total + loanValue,
                monthly: monthly + loanValue / 10,
            };
        },
        setInitValues: (
            state,
            action: PayloadAction<ProffessionInitData>,
        ): void => {
            const proffesionData = action.payload;

            state.bankLoan = {total: 0, monthly: 0};
            state.mortgage = {
                total: proffesionData.liabilities.mortgage,
                monthly: proffesionData.expenses.mortgage,
            };
            state.studentLoan = {
                total: proffesionData.liabilities.studentLoan,
                monthly: proffesionData.expenses.studentLoan,
            };
            state.carLoan = {
                total: proffesionData.liabilities.carLoan,
                monthly: proffesionData.expenses.carLoan,
            };
            state.creditCards = {
                total: proffesionData.liabilities.creditCards,
                monthly: proffesionData.expenses.creditCards,
            };
        },
    },
});
