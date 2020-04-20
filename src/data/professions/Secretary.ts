import {ProffessionInitData} from './Proffession';

const Secretary: ProffessionInitData = {
    income: 2500,
    savings: 700,
    expenses: {
        taxes: 500,
        mortgage: 400,
        studentLoan: 0,
        carLoan: 100,
        creditCards: 100,
        other: 600,
        child: 100,
    },
    liabilities: {
        mortgage: 38000,
        studentLoan: 0,
        carLoan: 4000,
        creditCards: 3000,
    },
};

export default Secretary;
