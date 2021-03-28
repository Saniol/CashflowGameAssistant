import transactionsReducer from '../../../src/transactions/transactionsReducer';

const sampleState = [
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
];

describe('transactions/transactionsReducer', () => {
    describe('#reducer', () => {
        it('should handle initial state', () => {
            expect(
                transactionsReducer.reducer(undefined, {type: 'fake-action'}),
            ).toBeInstanceOf(Object);
        });

        describe('dispatched add() action', () => {
            it('should add new transaction with proper values', () => {
                const newValue = 2000;
                const action = transactionsReducer.actions.add(newValue);
                const result = transactionsReducer.reducer(sampleState, action);
                const expected = [
                    ...sampleState,
                    {
                        id: 3,
                        value: newValue,
                        totalAfter: 2700,
                    },
                ];

                expect(result).toStrictEqual(expected);
            });
        });

        describe('dispatched clear() action', () => {
            it('should remove all transactions', () => {
                const action = transactionsReducer.actions.clear();
                const result = transactionsReducer.reducer(sampleState, action);

                expect(result).toStrictEqual([]);
            });
        });
    });
});
