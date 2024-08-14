import Tabs from "../../../components/tabs"
import ButtonLink from "../../../components/button-link"
import Button from "../../../components/button"
import CurrencyDropdown from "../../../components/currency-dropdown"

export default function CreateAccount() {

    let inputClasses = "text-black dark:text-white dark:bg-inputBG px-2 w-44 rounded-md py-2 shadow text-sm"
    return (
        <>
            <Tabs active={0} />
            <div className="flex justify-center flex-col">

                <h1 className="text-center text-2xl font-extrabold mt-4">Create Account</h1>

                <div className="text-left flex flex-col md:flex-row self-center md:self-auto mt-5 gap-y-4 lg:">
                    <div className="flex flex-col px-4">
                        <h1 className="pl-1 text-xs mb-1">Account Name</h1>
                        <input className={inputClasses} type="text" placeholder="Account Name" />
                    </div>

                    <div className="flex flex-col px-4">
                        <h1 className="pl-1 text-xs mb-1">Account Name</h1>
                        <CurrencyDropdown />
                    </div>

                    <div className="flex flex-col px-4">
                        <h1 className="pl-1 text-xs mb-1">Initial Balance</h1>
                        <input className={inputClasses} type="number" placeholder="Initial Balance" />
                    </div>
                </div>

                <Button text={"Save"} variant={"success"} />

            </div>
        </>
    )
}