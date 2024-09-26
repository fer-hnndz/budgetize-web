import { HTMLInputTypeAttribute, ChangeEvent } from "react";

interface InputProps {
    name: string;
    type: React.HTMLInputTypeAttribute;
    defaultValue?: string;
    placeholder?: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    value?: string;
}


export default function Input({ name, type, defaultValue, placeholder, onChange, value }: InputProps) {
    let inputClasses = "dark:border-0 border-2 text-black dark:text-white dark:bg-inputBG px-2 w-44 rounded-md py-2 shadow text-sm";
    let placeholderText = placeholder ? placeholder : "";
    let input = <input className={inputClasses} id={name.replace(" ", "") + "Input"}
        type={type} defaultValue={defaultValue}
        placeholder={placeholderText}
        onChange={(onChange) ? onChange : () => { }}
        value={value} />

    return (
        <div className="flex flex-col gap-y-1">

            {(placeholder) ?
                input
                :
                <>
                    <span className="text-black dark:text-white text-lg font-bold">{name}</span>
                    {input}
                </>

            }
        </div>
    );
}