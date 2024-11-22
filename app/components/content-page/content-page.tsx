import { ContentPageProps } from "@/app/types/content-page";

export default function ContentPage({ header, subtext, mainContent, filterContent = <></> }: ContentPageProps) {
    return (
      <>
        <div className="sm:my-2">
            <div className="flex flex-col gap-y-4 md:gap-y-0 md:flex-row justify-between">
                <div>
                  <h1 className="font-black text-primary text-[32px]">{header ?? 'header'}</h1>
                  <p className="font-semibold text-subtext text-base">{subtext ?? 'subtext'}</p>
                </div>
                {filterContent}
            </div>
            {mainContent}
            </div>
      </>
    );
}