import { CollectionCardProps } from "@/app/types/shared";
import { useRouter } from "next/navigation";

export default function CollectionCardComponent({ data, isEditMode, onChange = () => {} }: CollectionCardProps) {
    const router = useRouter();

    const redirectToCollection = (targetId: number) => {
        router.push(`/collection/${targetId}`);
    };

    return (
        <div 
            className={`${isEditMode ? "cursor-pointer" : ""} w-full h-full flex flex-col gap-y-3 transition-all ease-in-out duration-300 group`}
        >
        {
            data.type === 'Videos' ? (
                <video 
                    autoPlay
                    loop
                    muted
                    onClick={() => redirectToCollection(data.id)} 
                    className={`${isEditMode ? "" : "group-hover:-translate-y-2"} rounded-2xl w-full h-full object-cover`}
                >
                    <source src={data.thumbnail} type="video/mp4" />
                </video>
            ) : (
                <div className={`${isEditMode ? "" : "group-hover:-translate-y-2"} w-full h-full`}>
                    <img
                        src={data.thumbnail}
                        alt={data.altText}
                        onClick={() => redirectToCollection(data.id)}
                        className="rounded-2xl object-cover w-full h-full"
                    />
                </div>
            )
        }
            <div className="flex justify-between relative px-4 py-2">
                <div className="flex flex-col gap-y-1 w-full">
                    {isEditMode ? (
                        <input 
                            value={data.title} 
                            onChange={(event: React.FormEvent<HTMLInputElement>) => onChange(data.id, event.currentTarget.value)} 
                            className="bg-bright-bg text-base text-primary font-medium" 
                        /> 
                    ): (
                        <p className="text-base text-primary font-medium">{data.title}</p>
                    )}
                    {isEditMode ? <div className="outline outline-1 outline-inactive-button-border"></div> : <p className="text-sm text-subtext font-regular">{`${data.noOfItems} ${data.type}`}</p>}
                </div>
                {isEditMode ? <></> : (
                    <div className="absolute right-5 opacity-100 sm:opacity-0 sm:group-hover:opacity-100">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.60478 0.586616L3.99811 3.16662C3.93563 3.22859 3.88603 3.30233 3.85219 3.38356C3.81834 3.4648 3.80091 3.55194 3.80091 3.63995C3.80091 3.72796 3.81834 3.81509 3.85219 3.89633C3.88603 3.97757 3.93563 4.05131 3.99811 4.11328C4.06009 4.17577 4.13382 4.22536 4.21506 4.25921C4.2963 4.29306 4.38344 4.31048 4.47145 4.31048C4.55945 4.31048 4.64659 4.29306 4.72783 4.25921C4.80907 4.22536 4.8828 4.17577 4.94478 4.11328L7.33145 1.73995L7.33145 15.3333C7.33145 15.5101 7.40168 15.6797 7.52671 15.8047C7.65173 15.9297 7.8213 15.9999 7.99811 15.9999C8.17492 15.9999 8.34449 15.9297 8.46952 15.8047C8.59454 15.6797 8.66478 15.5101 8.66478 15.3333L8.66478 1.69995L11.0781 4.11328C11.2021 4.23148 11.3668 4.29741 11.5381 4.29741C11.7094 4.29741 11.8741 4.23148 11.9981 4.11328C12.0606 4.05131 12.1102 3.97757 12.144 3.89633C12.1779 3.81509 12.1953 3.72796 12.1953 3.63995C12.1953 3.55194 12.1779 3.4648 12.144 3.38356C12.1102 3.30233 12.0606 3.22859 11.9981 3.16662L9.43145 0.586616C9.05645 0.212081 8.54812 0.00170898 8.01811 0.00170898C7.48811 0.00170898 6.97978 0.212081 6.60478 0.586616Z" fill="#E51058" transform="rotate(90 8 8)"/>
                        </svg>
                    </div>
                )}
            </div>
        </div>
    )
}