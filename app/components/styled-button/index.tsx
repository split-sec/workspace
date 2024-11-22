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
        <div className="outline outline-1 outline-inactive-button-border p-2 md:p-3 rounded-md cursor-pointer group" onClick={onClick}>
            <img
                className={`transition ease-in-out duration-500 w-3 h-3 md:w-[14px] md:h-[14px] group-hover:scale-125 group-hover:text-secondary`}
                src={iconPath} 
                alt={altText}
            />
        </div>
    )
}