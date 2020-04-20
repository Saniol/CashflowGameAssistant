import {ProffessionInitData} from './Proffession';

const Janitor: ProffessionInitData = {
    income: 1600,
    savings: 300,
    expenses: {
        taxes: 200,
        mortgage: 1000,
        studentLoan: 0,
        carLoan: 100,
        creditCards: 100,
        other: 300,
        child: 100,
    },
    liabilities: {
        mortgage: 20000,
        studentLoan: 0,
        carLoan: 4000,
        creditCards: 3000,
    },
};

export default Janitor;
