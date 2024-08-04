export default function AccountsTable({ accounts }) {
    return (
        <table className="mt-6">
            <thead className="text-lg font-semibold">
                <tr>
                    <th>Account Name</th>
                    <th>Balance</th>
                </tr>
            </thead>
            <tbody>
                {accounts.map((account) => (
                    <tr key={account.name}>
                        <td>{account.name}</td>
                        <td>{account.balance}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}