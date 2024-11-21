import Image from "next/image";

export default function StyledButtonComponent({ iconPath, activeIconPath, altText, width, height }: any) {
    return (
        <div className="outline outline-1 outline-inactive-button-border p-3 rounded-md cursor-pointer group">
            <Image
                src={iconPath}
                width={width}
                height={height}
                alt={altText}
            />
        </div>
    )
}