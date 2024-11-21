import { ContentPageProps } from "@/app/types/content-page";
import ActionItemsComponent from "../action-items";

export default function ContentPage({ header, subtext, content, showActionItems = false }: ContentPageProps) {
    return (
      <>
        <div className="sm:my-2">
            <div className="flex justify-between">
                <div>
                <h1 className="font-black text-primary text-[32px]">{header ?? 'header'}</h1>
                <p className="font-semibold text-subtext text-base">{subtext ?? 'subtext'}</p>
                </div>
                {
                    showActionItems ? <ActionItemsComponent /> : <></>
                }
            </div>
            {content}
            </div>
      </>
    );
}