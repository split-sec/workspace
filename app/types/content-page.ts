import { ReactElement } from "react"

export type ContentPageProps = {
    header: string,
    subtext: string,
    mainContent: ReactElement,
    filterContent?: ReactElement,
};