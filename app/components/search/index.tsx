import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

export default function SearchComponent({ queryParamName }: { queryParamName: string }) {
    const router = useRouter();
    const pathname = usePathname();
    const queryParams = useSearchParams();
    const inputValue = queryParams.get(queryParamName) ?? '';

    const handleChange = useCallback(
        (value: string) => {
          const params = new URLSearchParams(queryParams.toString())
          params.set(queryParamName, value);
     
          router.push(pathname + '?' + params);
        },
        [queryParams]
    );

    return (
        <div className="outline outline-1 outline-inactive-button-border rounded-md p-2 md:p-3 flex items-center justify-between grow">
            <div className="flex items-center gap-x-2">
                <img src="/search-icon.svg" className="h-2 w-2 md:h-3 md:w-3" alt="Search Icon" />
                <input value={inputValue} onChange={(event: React.FormEvent<HTMLInputElement>) => handleChange(event.currentTarget.value)} placeholder="Type here to search" className="bg-bright-bg text-[10px] md:text-xs text-primary font-regular grow cursor-pointer"/>
            </div>
            <img src="/close-icon.svg" className={`h-[14px] w-[14px] cursor-pointer ${inputValue.length > 0 ? "block" : "hidden"}`} alt="Delete Icon" onClick={() => handleChange("")} />
        </div>
    );
}