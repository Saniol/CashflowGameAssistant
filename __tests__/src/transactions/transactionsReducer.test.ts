import transactionsSlice from '../../../src/transactions/transactionsSlice';

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

describe('transactions/transactionsSlice', () => {
    describe('#reducer', () => {
        it('should handle initial state', () => {
            expect(
                transactionsSlice.reducer(undefined, {type: 'fake-action'}),
            ).toBeInstanceOf(Object);
        });

        describe('dispatched add() action', () => {
            it('should add new transaction with proper values', () => {
                const newValue = 2000;
                const action = transactionsSlice.actions.add(newValue);
                const result = transactionsSlice.reducer(sampleState, action);
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
                const action = transactionsSlice.actions.clear();
                const result = transactionsSlice.reducer(sampleState, action);

                expect(result).toStrictEqual([]);
            });
        });
    });
});
