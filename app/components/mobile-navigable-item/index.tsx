import Image from "next/image";
import Link from "next/link";

export default function MobileNavigableItem({ 
    iconPath, 
    altText, 
    href 
}: {
    iconPath: string,
    altText: string,
    href: string,
}) {
    return (
        <Link href={href}>
            <Image
                src={iconPath}
                width={15}
                height={15}
                alt={altText}
            />
        </Link>
    )
}