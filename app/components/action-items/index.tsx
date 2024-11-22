import IconButtonComponent from "../icon-button";
import SearchComponent from "../search";
import StyledButtonComponent from "../styled-button";

export default function ActionItemsComponent() {
    return (
        <div className="flex flex-col gap-3">
            <div className="flex gap-x-3">
                <SearchComponent queryParamName="search" />
                <StyledButtonComponent iconPath="/fan-icon.svg" height={14} width={14} altText="Fan icon" />
            </div>
            <div className="flex items-center gap-x-3">
                <StyledButtonComponent iconPath="/rename.svg" activeIconPath="/rename-active.svg" height={14} width={14} altText="Fan icon" />
                <StyledButtonComponent iconPath="/delete.svg" activeIconPath="/delete-active.svg" height={14} width={14} altText="Fan icon" />
                <StyledButtonComponent iconPath="/copy-clipboard-icon.svg" activeIconPath="copy-clipboard-icon-active.svg" height={14} width={14} altText="Fan icon" />
                <IconButtonComponent iconPath="/new-folder-active.svg" altText="New Collection Icon" height={14} width={14} text={"Create new collection"} />
            </div>
        </div>
    )
}