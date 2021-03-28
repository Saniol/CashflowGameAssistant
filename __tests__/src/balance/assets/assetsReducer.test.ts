import assetsReducer from '../../../../src/balance/assets/assetsReducer';

const sampleState = [
    {
        description: 'Asset #1',
        totalCost: 3000,
        mortgage: 0,
        income: 100,
    },
    {
        description: 'Asset #2',
        totalCost: 16000,
        mortgage: 12000,
        income: 800,
    },
];

describe('balance/assets/assetsReducer', () => {
    describe('#reducer', () => {
        it('should handle initial state', () => {
            expect(
                assetsReducer.reducer(undefined, {type: 'fake-action'}),
            ).toBeInstanceOf(Object);
        });

        describe('dispatched add() action', () => {
            it('should add new asset to state', () => {
                const newAsset = {
                    description: 'sampleAsset',
                    totalCost: 5000,
                    mortgage: 4000,
                    income: 100,
                };
                const action = assetsReducer.actions.add(newAsset);
                const result = assetsReducer.reducer(sampleState, action);
                const expected = [...sampleState, newAsset];

                expect(result).toStrictEqual(expected);
            });
        });

        describe('dispatched remove() action', () => {
            it('should remove asset in given index', () => {
                const action = assetsReducer.actions.remove(1);
                const result = assetsReducer.reducer(sampleState, action);
                const expected = [sampleState[0]];

                expect(result).toStrictEqual(expected);
            });
        });
    });
});
