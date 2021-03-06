import {ProffessionInitData} from './Proffession';

const Teacher: ProffessionInitData = {
    income: 3300,
    savings: 400,
    expenses: {
        taxes: 500,
        mortgage: 500,
        studentLoan: 100,
        carLoan: 100,
        creditCards: 200,
        other: 700,
        child: 200,
    },
    liabilities: {
        mortgage: 50000,
        studentLoan: 12000,
        carLoan: 5000,
        creditCards: 4000,
    },
};

export default Teacher;
