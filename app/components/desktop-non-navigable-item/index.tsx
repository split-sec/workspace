import Image from "next/image";

export default function DesktopNonNavigableItem({ iconPath, altText, onClick }: any) {
    return (
        <Image
            src={iconPath}
            width={20}
            height={20}
            alt={altText}
            onClick={onClick}
            className="cursor-pointer"
        />
    )
}