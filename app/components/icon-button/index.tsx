import Image from "next/image";

export default function IconButtonComponent({ iconPath, altText, width, height, text }: any) {
    return (
        <div className="cursor-pointer rounded-md outline outline-1 outline-inactive-button-border py-3 px-6 flex items-center justify-center gap-x-3">
            <Image 
                src={iconPath}
                alt={altText}
                width={width}
                height={height}
            />
            <p className="text-md text-primary font-semibold">{text}</p>
        </div>
    )
}