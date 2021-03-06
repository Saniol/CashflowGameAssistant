import {ProffessionInitData} from './Proffession';

const Doctor: ProffessionInitData = {
    income: 4900,
    savings: 400,
    expenses: {
        taxes: 1000,
        mortgage: 700,
        studentLoan: 100,
        carLoan: 200,
        creditCards: 200,
        other: 1000,
        child: 200,
    },
    liabilities: {
        mortgage: 75000,
        studentLoan: 12000,
        carLoan: 7000,
        creditCards: 5000,
    },
};

export default Doctor;
