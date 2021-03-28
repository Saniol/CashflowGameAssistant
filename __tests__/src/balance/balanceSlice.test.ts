import balanceSlice from '../../../src/balance/balanceSlice';

const sampleState = {
    children: {count: 1, costPerChild: 100},
    staticExpenses: {taxes: 400, other: 500},
    baseIncome: 2300,
    networkMarketing: 1,
};

describe('balance/balanceSlice', () => {
    describe('#reducer', () => {
        it('should handle initial state', () => {
            expect(
                balanceSlice.reducer(undefined, {type: 'fake-action'}),
            ).toBeInstanceOf(Object);
        });

        describe('dispatched addChild() action', () => {
            it('should update children values', () => {
                const action = balanceSlice.actions.addChild();
                const result = balanceSlice.reducer(sampleState, action);
                const expected = {
                    ...sampleState,
                    children: {count: 2, costPerChild: 100},
                };

                expect(result).toStrictEqual(expected);
            });
        });

        describe('dispatched addNetworkMarketing() action', () => {
            it('should update children values', () => {
                const action = balanceSlice.actions.addNetworkMarketing();
                const result = balanceSlice.reducer(sampleState, action);
                const expected = {
                    ...sampleState,
                    networkMarketing: 2,
                };

                expect(result).toStrictEqual(expected);
            });
        });

        describe('dispatched setInitValues() action with profession data', () => {
            it('should update values', () => {
                const action = balanceSlice.actions.setInitValues({
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
                const result = balanceSlice.reducer(sampleState, action);
                const expected = {
                    children: {count: 0, costPerChild: 300},
                    staticExpenses: {taxes: 900, other: 1000},
                    baseIncome: 4600,
                    networkMarketing: 0,
                };

                expect(result).toStrictEqual(expected);
            });
        });
    });
});
