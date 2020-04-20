import {ProffessionInitData} from './Proffession';

const Nurse: ProffessionInitData = {
    income: 3100,
    savings: 500,
    expenses: {
        taxes: 600,
        mortgage: 400,
        studentLoan: 100,
        carLoan: 100,
        creditCards: 200,
        other: 600,
        child: 200,
    },
    liabilities: {
        mortgage: 47000,
        studentLoan: 6000,
        carLoan: 5000,
        creditCards: 4000,
    },
};

export default Nurse;
