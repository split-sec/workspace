import Image from "next/image";
import Link from "next/link";

export default function DesktopNavigableItem({ iconPath, altText, href }: any) {
    return (
        <Link href={href}>
            <Image
                src={iconPath}
                width={20}
                height={20}
                alt={altText}
            />
        </Link>
    )
}