import { MouseEventHandler } from "react";
import { OptionItem } from "../utils/collection";

export type SortByComponentProps = {
    queryName: string,
    isAscending?: boolean,
};

export type ComboButtonFilterComponentProps = {
    optionsList: OptionItem[],
    isSelected: Function,
    onSelect: Function,
};

export type ButtonFilterComponentProps = {
    title: string,
    isSelected: boolean,
    onSelect: Function,
};

export type NavbarIconType = {
    iconPath: string,
    iconPathActive: string,
    href: string,
    alt: string,
};

export type NonNavbarIconType = {
    iconPath: string,
    onClick: Function,
    alt: string,
};

export type IconButtonComponentProps = {
    iconPath: string, 
    altText: string,
    width: number,
    height: number,
    text: string,
    onClick?: MouseEventHandler<HTMLDivElement>,
};