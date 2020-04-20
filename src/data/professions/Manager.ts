import {ProffessionInitData} from './Proffession';

const Manager: ProffessionInitData = {
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
};

export default Manager;
