import Link from "next/link"

type Variant = "primary" | "error" | "success" | "warning"
export default function ButtonLink({ href, text, variant }: { href: string, text: string, variant: Variant }) {
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

    let classes = "w-fit h-fit px-2 py-4 rounded-md shadow hover:-translate-y-1 transition duration-75 ease-out " + bgColor
    return (
        <Link href={href}>
            <button className={classes}>{text}</button>
        </Link>
    )
}
