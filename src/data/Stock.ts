export interface StockItem {
    id: number;
    name: string;
    count: number;
    price: number;
}

export const MockData: Array<StockItem> = [
    {id: 1, name: 'GRO4US', count: 500, price: 5},
    {id: 2, name: 'ON2U', count: 100, price: 10},
];
