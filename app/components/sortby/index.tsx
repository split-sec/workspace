import { SortByComponentProps } from "@/app/types/shared";
import StyledButtonComponent from "../styled-button";

export default function SortByComponent({ queryName, isAscending = false }: SortByComponentProps) {
    return (
        <div className="flex items-center gap-2">
            <div className="flex flex-col justify-center items-end">
                <p className="text-[10px] text-subtext font-regular">Sort by</p>
                <div className="flex gap-x-1 items-center">
                    <p className="text-xs md:text-sm text-primary font-semibold">{queryName}</p>
                    <div className="flex flex-col gap-y-0.5 cursor-pointer" onClick={() => {}}>
                        <img src={isAscending ? "/sort-up-icon.svg" : "/sort-up-icon-active.svg"} className="w-[6px] h-[6px] md:w-2 md:h-2"/>
                        <img src={isAscending ? "/sort-down-icon-active.svg": "/sort-down-icon.svg"} className="w-[6px] h-[6px] md:w-2 md:h-2"/>
                    </div>
                </div>
            </div>
            <StyledButtonComponent iconPath="/ladder-icon.svg" altText="Filter Icon" />
        </div>
    );
}