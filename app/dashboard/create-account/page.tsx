import Tabs from "../../../components/tabs"
import ButtonLink from "../../../components/button-green"
import CurrencyDropdown from "../../../components/currency-dropdown"

export default function CreateAccount() {
    return (
        <div className="flex justify-center text-center flex-col">
            <h1>Create Account</h1>
            <CurrencyDropdown />
        </div>
    )
}