import Image from "next/image";
import { MouseEventHandler } from "react";

export default function DesktopNonNavigableItem({ 
    iconPath, 
    altText, 
    onClick 
}: {
    iconPath: string,
    altText: string,
    onClick: MouseEventHandler<HTMLImageElement>,
}) {
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