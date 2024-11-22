import { MouseEventHandler } from "react";

export default function StyledButtonComponent({ 
    iconPath, 
    altText,
    onClick = () => {}
}: {
    iconPath: string,
    altText: string,
    onClick?: MouseEventHandler<HTMLDivElement>,
}) {
    return (
        <div className="outline outline-1 outline-inactive-button-border p-3 rounded-md cursor-pointer group" onClick={onClick}>
            <img
                className={`transition ease-in-out duration-500 w-[14px] h-[14px] group-hover:scale-125 group-hover:text-secondary`}
                src={iconPath} 
                alt={altText}
            />
        </div>
    )
}