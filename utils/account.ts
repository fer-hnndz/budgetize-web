export default class Account {
    id: number;
    name: string;
    balance: number;
    currency: string;

    constructor(id: number, name: string, currency: string) {
        this.id = id;
        this.name = name;
        this.currency = currency;
    }
}