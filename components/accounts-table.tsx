import { useTranslations } from "next-intl";

export default function AccountsTable({ accounts }) {

    const t = useTranslations("Dashboard")
    return (
        <table className="mt-6 border border-blue-600">
            <thead className="text-lg font-semibold p-2 bg-blue-500">
                <tr>
                    <th className="bg-blue-500 font-semibold px-4">{t("accountName")}</th>
                    <th className="bg-blue-500 font-semibold px-2">{t("accountBalance")}</th>
                </tr>
            </thead >
            <tbody className="p-2">
                {accounts.map((account) => (
                    <tr key={account.name}>
                        <td className="hover:bg-orange-500 transition duration-100 ease-in-out">{account.name}</td>
                        <td className="hover:bg-orange-500">{account.balance}</td>
                    </tr>
                ))}
            </tbody>
        </table >
    )
}