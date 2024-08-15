export default class Transaction {
    account_id: number;
    amount: number;
    description: string;
    timestamp: number;
    visible: boolean;

    constructor(account_id: number, amount: number, description: string, timestamp: number, visible: boolean) {
        this.account_id = account_id;
        this.amount = amount;
        this.description = description;
        this.timestamp = timestamp;
        this.visible = visible;
    }
}