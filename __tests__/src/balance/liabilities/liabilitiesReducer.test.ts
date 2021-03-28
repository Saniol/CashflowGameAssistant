import liabilitiesReducer from '../../../../src/balance/liabilities/liabilitiesReducer';

const sampleState = {
    mortgage: {total: 140000, monthly: 1000},
    studentLoan: {total: 90000, monthly: 700},
    carLoan: {total: 50000, monthly: 800},
    creditCards: {total: 6000, monthly: 200},
    bankLoan: {total: 3000, monthly: 300},
};

describe('balance/liabilities/liabilitiesReducer', () => {
    describe('#reducer', () => {
        it('should handle initial state', () => {
            expect(
                liabilitiesReducer.reducer(undefined, {type: 'fake-action'}),
            ).toBeInstanceOf(Object);
        });

        describe('dispatched payOff() action', () => {
            describe('type is valid and is not equal "bankLoan"', () => {
                it('should set liability values to 0', () => {
                    const action = liabilitiesReducer.actions.payOff({
                        type: 'carLoan',
                    });
                    const result = liabilitiesReducer.reducer(
                        sampleState,
                        action,
                    );
                    const expected = {
                        ...sampleState,
                        carLoan: {total: 0, monthly: 0},
                    };

                    expect(result).toStrictEqual(expected);
                });
            });
            describe('type is equal "bankLoan", value is not defined', () => {
                it('should set bank loan values to 0', () => {
                    const action = liabilitiesReducer.actions.payOff({
                        type: 'bankLoan',
                    });
                    const result = liabilitiesReducer.reducer(
                        sampleState,
                        action,
                    );
                    const expected = {
                        ...sampleState,
                        bankLoan: {total: 0, monthly: 0},
                    };

                    expect(result).toStrictEqual(expected);
                });
            });
            describe('type is equal "bankLoan", value is defined', () => {
                it('should reduce bank loan values', () => {
                    const action = liabilitiesReducer.actions.payOff({
                        type: 'bankLoan',
                        value: 1000,
                    });
                    const result = liabilitiesReducer.reducer(
                        sampleState,
                        action,
                    );
                    const expected = {
                        ...sampleState,
                        bankLoan: {total: 2000, monthly: 200},
                    };

                    expect(result).toStrictEqual(expected);
                });
            });
        });

        describe('dispatched takeBankLoan() action', () => {
            it('should increase bank loan values', () => {
                const action = liabilitiesReducer.actions.takeBankLoan(2000);
                const result = liabilitiesReducer.reducer(sampleState, action);
                const expected = {
                    ...sampleState,
                    bankLoan: {total: 5000, monthly: 500},
                };

                expect(result).toStrictEqual(expected);
            });
        });
    });
});
