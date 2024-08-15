import localStorageDB from "localstoragedb";
import Transaction from "./transaction";
export default class Account {
    id: number;
    name: string;
    balance: number;
    currency: string;

    constructor(id: number, name: string, currency: string, transactions: Transaction[] = []) {
        this.id = id;
        this.name = name;
        this.currency = currency;
        this.balance = 0.0;

        // Load Balance
        transactions.forEach((transaction) => {
            this.balance += transaction.amount;
        });
    }

    static getAccountsFromStorage(storage: typeof localStorage): Account[] {
        let accounts: Account[] = [];

        let db = new localStorageDB("budgetize", storage);

        if (!db.tableExists("accounts")) return accounts;

        db.queryAll("accounts", {}).forEach((acc) => {
            let accountTransactions = db.queryAll("transactions", { account_id: acc.ID })
            accounts.push(new Account(acc.ID, acc.name, acc.currency, accountTransactions));
        });

        return accounts;
    }
}