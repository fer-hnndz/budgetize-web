export default function DefaultBalance({ income, expense }) {
    return (
        <>
            <div className="text-center justify-centert mt-4">
                <h1 className="font-bold text-lg dark:text-white">Income this Month</h1>
                <span className="text-md text-lime-400">{income}</span>

                <h1 class="font-bold text-lg dark:text-white">Balance</h1>
                <span class="text-md text-blue-400">{income - expense}</span>
                <h1 className="font-bold text-lg dark:text-white">Expense this Month</h1>
                <span className="text-md text-red-400">{expense}</span>
            </div>
        </>
    )
}