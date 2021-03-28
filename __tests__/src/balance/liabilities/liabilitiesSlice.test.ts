import liabilitiesSlice from '../../../../src/balance/liabilities/liabilitiesSlice';

const sampleState = {
    mortgage: {total: 140000, monthly: 1000},
    studentLoan: {total: 90000, monthly: 700},
    carLoan: {total: 50000, monthly: 800},
    creditCards: {total: 6000, monthly: 200},
    bankLoan: {total: 3000, monthly: 300},
};

describe('balance/liabilities/liabilitiesSlice', () => {
    describe('#reducer', () => {
        it('should handle initial state', () => {
            expect(
                liabilitiesSlice.reducer(undefined, {type: 'fake-action'}),
            ).toBeInstanceOf(Object);
        });

        describe('dispatched payOff() action', () => {
            describe('type is valid and is not equal "bankLoan"', () => {
                it('should set liability values to 0', () => {
                    const action = liabilitiesSlice.actions.payOff({
                        type: 'carLoan',
                    });
                    const result = liabilitiesSlice.reducer(
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
                    const action = liabilitiesSlice.actions.payOff({
                        type: 'bankLoan',
                    });
                    const result = liabilitiesSlice.reducer(
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
                    const action = liabilitiesSlice.actions.payOff({
                        type: 'bankLoan',
                        value: 1000,
                    });
                    const result = liabilitiesSlice.reducer(
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
                const action = liabilitiesSlice.actions.takeBankLoan(2000);
                const result = liabilitiesSlice.reducer(sampleState, action);
                const expected = {
                    ...sampleState,
                    bankLoan: {total: 5000, monthly: 500},
                };

                expect(result).toStrictEqual(expected);
            });
        });

        describe('dispatched setInitValues() action with profession data', () => {
            it('should update values', () => {
                const action = liabilitiesSlice.actions.setInitValues({
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
                const result = liabilitiesSlice.reducer(sampleState, action);
                const expected = {
                    mortgage: {total: 75000, monthly: 700},
                    studentLoan: {total: 12000, monthly: 100},
                    carLoan: {total: 6000, monthly: 100},
                    creditCards: {total: 4000, monthly: 200},
                    bankLoan: {total: 0, monthly: 0},
                };

                expect(result).toStrictEqual(expected);
            });
        });
    });
});
