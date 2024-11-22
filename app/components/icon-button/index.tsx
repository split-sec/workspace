import { IconButtonComponentProps } from "@/app/types/shared";
import Image from "next/image";

export default function IconButtonComponent({ iconPath, altText, width, height, text, onClick = () => {} }: IconButtonComponentProps) {
    return (
        <div 
            onClick={onClick}
            className="cursor-pointer rounded-md outline outline-1 outline-inactive-button-border py-2 px-4 md:py-3 px-6 flex items-center justify-center gap-x-1 md:gap-x-3"
        >
            <Image 
                src={iconPath}
                alt={altText}
                width={width}
                height={height}
            />
            <p className="text-[6px] md:text-[8px] md:text-xs text-primary font-semibold">{text}</p>
        </div>
    )
}