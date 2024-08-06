import Link from "next/link"

export default function ButtonLink({ href, text }: { href: string, text: string }) {
    return (
        <Link href={href}>
            <button className="bg-green-700 p-4 rounded shadow hover:-translate-y-1 transition duration-75 ease-out">{text}</button>
        </Link>
    )
}
