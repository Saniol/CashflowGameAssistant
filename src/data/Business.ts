export interface BusinessItem {
    id: number;
    name: string;
    income: number;
    contribution: number;
    price: number;
}

export const MockData: Array<BusinessItem> = [
    {
        id: 1,
        name: 'Dom 2+1',
        income: 0,
        price: 40000,
        contribution: 1000,
    },
    {
        id: 2,
        name: '4 domki szeregowe',
        income: 400,
        price: 240000,
        contribution: 10000,
    },
];
