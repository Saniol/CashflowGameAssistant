import Lang from '../../lang/pl';
import {ProffessionInitData} from './Proffession';
import AirlinePilot from './AirlinePilot';
import Doctor from './Doctor';
import Engineer from './Engineer';
import Janitor from './Janitor';
import Lawyer from './Lawyer';
import Manager from './Manager';
import Mechanic from './Mechanic';
import Nurse from './Nurse';
import Policeman from './Policeman';
import Secretary from './Secretary';
import Teacher from './Teacher';
import TruckDriver from './TruckDriver';

interface ProfessionDefinition {
    type: string;
    name: string;
    initData: ProffessionInitData;
}

const Proffessions: Array<ProfessionDefinition> = [
    {
        type: 'AirlinePilot',
        name: Lang.proffessionAirlinePilot,
        initData: AirlinePilot,
    },
    {
        type: 'Doctor',
        name: Lang.proffessionDoctor,
        initData: Doctor,
    },
    {
        type: 'Engineer',
        name: Lang.proffessionEngineer,
        initData: Engineer,
    },
    {
        type: 'Janitor',
        name: Lang.proffessionJanitor,
        initData: Janitor,
    },
    {
        type: 'Lawyer',
        name: Lang.proffessionLawyer,
        initData: Lawyer,
    },
    {
        type: 'Manager',
        name: Lang.proffessionManager,
        initData: Manager,
    },
    {
        type: 'Mechanic',
        name: Lang.proffessionMechanic,
        initData: Mechanic,
    },
    {
        type: 'Nurse',
        name: Lang.proffessionNurse,
        initData: Nurse,
    },
    {
        type: 'Policeman',
        name: Lang.proffessionPoliceman,
        initData: Policeman,
    },
    {
        type: 'Secretary',
        name: Lang.proffessionSecretary,
        initData: Secretary,
    },
    {
        type: 'Teacher',
        name: Lang.proffessionTeacher,
        initData: Teacher,
    },
    {
        type: 'TruckDriver',
        name: Lang.proffessionTruckDriver,
        initData: TruckDriver,
    },
];

export default Proffessions;
