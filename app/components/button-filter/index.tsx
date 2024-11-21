export default function ButtonFilterComponent({ title, isSelected, onSelect }: any) {
    return (
        <div onClick={() => onSelect(title)} className={`cursor-pointer p-4 text-xs font-semibold rounded-full outline outline-1 transition-outline ease-in-out duration-300 ${isSelected ? "bg-secondary text-bright-bg outline-secondary" : "bg-bright-bg text-primary outline-inactive-button-border hover:outline-secondary"}`}>
            {title}
        </div>
    )
}