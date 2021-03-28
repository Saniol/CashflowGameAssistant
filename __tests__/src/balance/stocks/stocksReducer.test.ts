import stocksReducer from '../../../../src/balance/stocks/stocksReducer';

const sampleState = [
    {
        description: 'Stock #1',
        units: 10,
        costPerUnit: 5,
    },
    {
        description: 'Stock #2',
        units: 500,
        costPerUnit: 20,
    },
];

describe('balance/stocks/stocksReducer', () => {
    describe('#reducer', () => {
        it('should handle initial state', () => {
            expect(
                stocksReducer.reducer(undefined, {type: 'fake-action'}),
            ).toBeInstanceOf(Object);
        });

        describe('dispatched add() action', () => {
            it('should add new stock to state', () => {
                const newStock = {
                    description: 'sampleStock',
                    units: 200,
                    costPerUnit: 10,
                };
                const action = stocksReducer.actions.add(newStock);
                const result = stocksReducer.reducer(sampleState, action);
                const expected = [...sampleState, newStock];

                expect(result).toStrictEqual(expected);
            });
        });

        describe('dispatched remove() action', () => {
            it('should remove stock in given index', () => {
                const action = stocksReducer.actions.remove(1);
                const result = stocksReducer.reducer(sampleState, action);
                const expected = [sampleState[0]];

                expect(result).toStrictEqual(expected);
            });
        });

        describe('dispatched clear() action', () => {
            it('should remove all stocks', () => {
                const action = stocksReducer.actions.clear();
                const result = stocksReducer.reducer(sampleState, action);

                expect(result).toStrictEqual([]);
            });
        });
    });
});
