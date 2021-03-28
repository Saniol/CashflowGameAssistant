import transactionsSlice from '../../../src/transactions/transactionsSlice';

const sampleState = {
    cash: 700,
    list: [
        {
            id: 1,
            value: 500,
            totalAfter: 500,
        },
        {
            id: 2,
            value: 200,
            totalAfter: 700,
        },
    ],
};

describe('transactions/transactionsSlice', () => {
    describe('#reducer', () => {
        it('should handle initial state', () => {
            expect(
                transactionsSlice.reducer(undefined, {type: 'fake-action'}),
            ).toBeInstanceOf(Object);
        });

        describe('dispatched add() action', () => {
            it('should add new transaction and update cash', () => {
                const newValue = 2000;
                const action = transactionsSlice.actions.add(newValue);
                const result = transactionsSlice.reducer(sampleState, action);
                const expected = {
                    cash: 2700,
                    list: [
                        ...sampleState.list,
                        {
                            id: 3,
                            value: newValue,
                            totalAfter: 2700,
                        },
                    ],
                };

                expect(result).toStrictEqual(expected);
            });
        });

        describe('dispatched init() action with profession data', () => {
            it('should remove all transactions and set init cash value', () => {
                const action = transactionsSlice.actions.init({
                    income: 4600,
                    savings: 400,
                    expenses: {
                        taxes: 900,
                        mortgage: 700,
                        studentLoan: 100,
                        carLoan: 100,
                        creditCards: 200,
                        other: 1000,
                        child: 300,
                    },
                    liabilities: {
                        mortgage: 75000,
                        studentLoan: 12000,
                        carLoan: 6000,
                        creditCards: 4000,
                    },
                });
                const result = transactionsSlice.reducer(sampleState, action);
                const expected = {
                    cash: 5000,
                    list: [],
                };

                expect(result).toStrictEqual(expected);
            });
        });
    });
});
