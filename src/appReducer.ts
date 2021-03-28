import {combineReducers, configureStore, Reducer} from '@reduxjs/toolkit';
import balanceSlice from './balance/balanceSlice';
import assetsSlice from './balance/assets/assetsSlice';
import liabilitiesSlice from './balance/liabilities/liabilitiesSlice';
import stocksSlice from './balance/stocks/stocksSlice';
import transactionsSlice from './transactions/transactionsSlice';

const appReducer: Reducer = combineReducers({
    balance: balanceSlice.reducer,
    assets: assetsSlice.reducer,
    liabilities: liabilitiesSlice.reducer,
    stocks: stocksSlice.reducer,
    transactions: transactionsSlice.reducer,
});

const createStore = () =>
    configureStore({
        reducer: appReducer,
    });

export const store = createStore();

export type AppState = ReturnType<typeof appReducer>;

export type GetState = () => AppState;

export default appReducer;
