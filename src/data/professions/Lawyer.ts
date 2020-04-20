import {ProffessionInitData} from './Proffession';

const Lawyer: ProffessionInitData = {
    income: 7500,
    savings: 2000,
    expenses: {
        taxes: 1800,
        mortgage: 1100,
        studentLoan: 300,
        carLoan: 200,
        creditCards: 200,
        other: 1500,
        child: 400,
    },
    liabilities: {
        mortgage: 115000,
        studentLoan: 78000,
        carLoan: 11000,
        creditCards: 7000,
    },
};

export default Lawyer;
