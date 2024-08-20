import localStorageDB from "localstoragedb";
import Transaction from "./transaction";
export default class Account {
    readonly id: number;
    readonly name: string;
    readonly currency: string;
    balance: number

    constructor(id: number, name: string, currency: string, transactions: Transaction[] = []) {
        this.id = id;
        this.name = name;
        this.currency = currency;
        this.balance = 0.0

        transactions.forEach((transaction) => {
            this.balance += transaction.amount
        })

    }

    static getAccountsFromStorage(storage: typeof localStorage): Account[] {
        let accounts: Account[] = [];

        let db = new localStorageDB("budgetize", storage);

        if (!db.tableExists("accounts")) return accounts;

        db.queryAll("accounts", {}).forEach((acc) => {
            let accountTransactions = db.queryAll("transactions", { query: { account_id: acc.ID } })

            let transactions: Transaction[] = []

            accountTransactions.forEach((transaction) => {
                transactions.push(
                    new Transaction(transaction.account_id, transaction.amount, transaction.description, transaction.timestamp, transaction.visible)
                )
            })

            accounts.push(new Account(acc.ID, acc.name, acc.currency, transactions));
        });

        return accounts;
    }

    static fromId(id: number, storage: typeof localStorage): Account | null {
        const db = new localStorageDB("budgetize", localStorage)

        if (!db.tableExists("accounts")) return null;

        let accounts: Object[] = db.queryAll("accounts", { query: { ID: id } })
        if (accounts.length == 0) return null;

        let acc = accounts[0]

        let transactions = db.queryAll("transactions", { query: { account_id: id } })
        let transactionObjects: Transaction[] = []

        transactions.forEach((t) => {
            transactionObjects.push(new Transaction(t.account_id, t.amount, t.description, t.timestamp, t.visible))
        })

        return new Account(acc.ID, acc.name, acc.currency, transactionObjects);

    }
}