import { ComboButtonFilterComponentProps } from "@/app/types/shared"
import ButtonFilterComponent from "../button-filter"

export default function ComboButtonFilterComponent({ optionsList, isSelected, onSelect }: ComboButtonFilterComponentProps) {
    return (
        <div className="flex items-center gap-x-1 md:gap-x-3">
        {
            optionsList.map((item, id: number) => {
                return (
                    <ButtonFilterComponent title={item.title} isSelected={isSelected(item.title)} onSelect={onSelect} key={id} />
                )
            })
        }
        </div>
    )
}