import { MouseEventHandler } from "react";
import IconButtonComponent from "../icon-button";
import SearchComponent from "../search";
import StyledButtonComponent from "../styled-button";

export default function ActionItemsComponent({ onClick }: {
    onClick?: MouseEventHandler<HTMLDivElement>,
}) {
    return (
        <div className="flex flex-col gap-3">
            <div className="flex gap-x-3">
                <SearchComponent queryParamName="search" />
                <StyledButtonComponent iconPath="/fan-icon.svg" altText="Fan icon" />
            </div>
            <div className="flex items-center gap-x-3">
                <StyledButtonComponent iconPath="/rename.svg" altText="Fan icon" onClick={onClick} />
                <StyledButtonComponent iconPath="/delete.svg" altText="Fan icon" />
                <StyledButtonComponent iconPath="/copy-clipboard-icon.svg" altText="Fan icon" />
                <IconButtonComponent iconPath="/new-folder-active.svg" altText="New Collection Icon" height={14} width={14} text={"Create new collection"} />
            </div>
        </div>
    )
}