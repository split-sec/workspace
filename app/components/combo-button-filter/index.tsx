import ButtonFilterComponent from "../button-filter"

export default function ComboButtonFilterComponent({ optionsList, isSelected, onSelect }: any) {
    return (
        <div className="flex items-center gap-x-3">
        {
            optionsList.map((item: any, id: number) => {
                return (
                    <ButtonFilterComponent title={item.title} isSelected={isSelected(item.title)} onSelect={onSelect} key={id} />
                )
            })
        }
        </div>
    )
}