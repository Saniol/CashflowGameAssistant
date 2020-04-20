export interface ProffessionInitData {
    income: number;
    savings: number;
    expenses: {
        taxes: number;
        mortgage: number;
        studentLoan: number;
        carLoan: number;
        creditCards: number;
        other: number;
        child: number;
    };
    liabilities: {
        mortgage: number;
        studentLoan: number;
        carLoan: number;
        creditCards: number;
    };
}
