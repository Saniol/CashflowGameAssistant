import {ProffessionInitData} from './Proffession';

const Policeman: ProffessionInitData = {
    income: 3000,
    savings: 500,
    expenses: {
        taxes: 600,
        mortgage: 400,
        studentLoan: 0,
        carLoan: 100,
        creditCards: 100,
        other: 700,
        child: 200,
    },
    liabilities: {
        mortgage: 46000,
        studentLoan: 0,
        carLoan: 5000,
        creditCards: 3000,
    },
};

export default Policeman;
