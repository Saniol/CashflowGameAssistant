import 'react-native';
import React from 'react';
import TransactionsList from '../../../src/transactions/List';
import renderWithContexts from '../../common/renderWithContexts';

describe('<TransactionsList>', () => {
    renderWithContexts(TransactionsList);
});
