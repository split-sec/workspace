import { MouseEventHandler } from "react";
import { ReactElement } from "react"

export type ContentPageProps = {
    header: string,
    subtext: string,
    mainContent: ReactElement,
    filterContent?: ReactElement,
};

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

export type OptionItem = {
    title: string,
};

export type CollectionItem = {
    id: number,
    title: string,
    type: 'Photos' | 'Videos' | 'Documents',
    noOfItems: number,
    thumbnail: string,
    altText: string,
};

export type CollectionCardProps = {
    data: CollectionItem,
    isEditMode: boolean,
    onChange?: Function,
    key: string,
};