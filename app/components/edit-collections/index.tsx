import { MouseEventHandler } from "react";
import ButtonFilterComponent from "../button-filter";
import IconButtonComponent from "../icon-button";

export default function EditCollectionsComponent({ onSave, onClose }: {
    onSave: MouseEventHandler<HTMLDivElement>,
    onClose: MouseEventHandler<HTMLDivElement>,
}) {
    return (
        <div className="">
            <div className="flex gap-x-3 items-center w-full">
                <p className="text-subtext font-light text-sm text-end break-normal w-1/2 grow">
                    All changes made to this section will reflect for all users in the content hub.
                </p>
                <div onClick={onSave} className="flex gap-x-2 cursor-pointer p-4 text-xs font-semibold rounded-full outline outline-1 bg-secondary text-bright-bg outline-secondary">
                    <img src="/tick-icon.svg" className="w-3 h-3" alt="Save" />
                    <p>Save</p>
                </div>
                <ButtonFilterComponent title="Cancel" isSelected={false} onSelect={onClose} />
            </div>
        </div>
    )
}