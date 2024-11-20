import { ContentPageProps } from "@/app/types/content-page";

export default function ContentPage({ header, subtext, content }: ContentPageProps) {
    return (
      <>
        <div>
              <div className="flex justify-between">
                  <div>
                      <h1 className="font-black text-primary text-[32px]">{header ?? 'header'}</h1>
                      <p className="font-semibold text-subtext text-base">{subtext ?? 'subtext'}</p>
                  </div>
              </div>
              {content}
          </div>
      </>
    );
}