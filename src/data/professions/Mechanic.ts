import {ProffessionInitData} from './Proffession';

const Mechanic: ProffessionInitData = {
    income: 2000,
    savings: 700,
    expenses: {
        taxes: 400,
        mortgage: 300,
        studentLoan: 0,
        carLoan: 100,
        creditCards: 100,
        other: 400,
        child: 100,
    },
    liabilities: {
        mortgage: 31000,
        studentLoan: 0,
        carLoan: 3000,
        creditCards: 3000,
    },
};

export default Mechanic;
