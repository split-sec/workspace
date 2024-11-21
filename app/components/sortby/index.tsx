import StyledButtonComponent from "../styled-button";

export default function SortByComponent() {
    return (
        <div className="flex gap-2">
            <div className="flex flex-col justify-center items-end">
                <p className="text-[10px] text-subtext font-regular">Sort by</p>
                <p className="text-sm text-primary font-semibold">Created date</p>
            </div>
            <StyledButtonComponent iconPath="/ladder-icon.svg" activeIconPath="/ladder-icon-active.svg" height={14} width={14} altText="Filter Icon" />
        </div>
    );
}