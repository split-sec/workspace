import { ButtonFilterComponentProps } from "@/app/types/shared";

export default function ButtonFilterComponent({ title, isSelected, onSelect }: ButtonFilterComponentProps) {
    return (
        <div onClick={() => onSelect(title)} className={`cursor-pointer p-3 lg:p-4 text-[8px] lg:text-xs font-semibold rounded-full outline outline-1 transition-outline ease-in-out duration-300 ${isSelected ? "bg-secondary text-bright-bg outline-secondary" : "bg-bright-bg text-primary outline-inactive-button-border hover:outline-secondary"} truncate`}>
            {title}
        </div>
    )
}