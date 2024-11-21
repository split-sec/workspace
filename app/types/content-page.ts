import { ReactElement } from "react"

export type ContentPageProps = {
    header: string,
    subtext: string,
    content: ReactElement,
    showActionItems?: boolean,
};