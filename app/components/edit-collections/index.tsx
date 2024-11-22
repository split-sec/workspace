import { MouseEventHandler } from "react";
import ButtonFilterComponent from "../button-filter";

export default function EditCollectionsComponent({ onSave, onClose }: {
    onSave: MouseEventHandler<HTMLDivElement>,
    onClose: MouseEventHandler<HTMLDivElement>,
}) {
    return (
        <div className="">
            <div className="flex flex-col md:flex-row gap-3 items-center w-full">
                <p className="text-subtext font-light text-xs md:text-sm text-center md:text-end break-normal w-1/2 grow">
                    All changes made to this section will reflect for all users in the content hub.
                </p>
                <div className="flex items-center gap-x-2">
                    <div 
                        onClick={onSave} 
                        className="flex gap-x-2 cursor-pointer p-3 md:p-4 rounded-full outline outline-1 bg-secondary outline-secondary"
                    >
                        <img 
                            src="/tick-icon.svg" 
                            className="w-3 h-3 md:w-[14px] md:h-[14px]" 
                            alt="Save" 
                        />
                        <p className="text-[8px] md:text-xs text-bright-bg font-semibold">Save</p>
                    </div>
                    <ButtonFilterComponent title="Cancel" isSelected={false} onSelect={onClose} />
                </div>
            </div>
        </div>
    )
}