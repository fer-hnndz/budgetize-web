
type Variant = "primary" | "error" | "success" | "warning"
export default function Button({ text, variant, onClick }: { text: string, variant: Variant, onClick: CallableFunction }) {

    let bgColor = ""

    switch (variant) {
        case "primary":
            bgColor = "bg-blue-500"
            break;

        case "error":
            bgColor = "bg-red-500"
            break;

        case "success":
            bgColor = "bg-emerald-600"
            break;

        case "warning":
            bgColor = "bg-amber-300"
            break;
    }

    let classes = "text-white px-4 py-2 w-fit h-fit rounded-md shadow hover:-translate-y-1 transition duration-75 ease-out " + bgColor

    return (
        <button onClick={onClick} className={classes}>{text}</button>
    )

}