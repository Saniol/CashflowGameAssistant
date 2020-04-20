import {ProffessionInitData} from './Proffession';

const Doctor: ProffessionInitData = {
    income: 13200,
    savings: 3500,
    expenses: {
        taxes: 3200,
        mortgage: 1900,
        studentLoan: 700,
        carLoan: 300,
        creditCards: 200,
        other: 2000,
        child: 700,
    },
    liabilities: {
        mortgage: 202000,
        studentLoan: 150000,
        carLoan: 19000,
        creditCards: 10000,
    },
};

export default Doctor;
