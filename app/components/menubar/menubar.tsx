"use client"

import { bottomNavbarButtonList, navbarButtonList, navbarIconsList } from "@/app/utils/navbar";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Menubar() {
    const navigableItems = [...navbarIconsList];
    const nonNavigableItems = [...navbarButtonList];
    const bottomNonNavigableItems = [...bottomNavbarButtonList];

    const pathname = usePathname();
    console.log('pathname', pathname);
    const isActive = (targetPath: string) => targetPath === pathname;

    return (
        <>
            <div className="flex gap-2 items-center justify-center fixed bottom-0 w-full sm:invisible">
                <p>1</p>
                <p>2</p>
                <p>3</p>
            </div>

            <div className="invisible sm:visible fixed flex flex-col items-center justify-between left-0 top-0 h-full py-16 px-5">
                <div className="flex flex-col gap-10">
                {
                    navigableItems.map((item: any, id: any) => {
                        return (
                            <Link href={item.href} key={id}>
                                <Image
                                    src={item.iconPath}
                                    width={20}
                                    height={20}
                                    alt={item.alt}
                                    className={isActive(item.href) ? "text-secondary" : "text-primary"}
                                />
                            </Link>
                        )
                    })
                }
                {
                    nonNavigableItems.map((item: any, id: any) => {
                        return (
                            <Image
                                src={item.iconPath}
                                width={20}
                                height={20}
                                alt={item.alt}
                                onClick={item.onClick}
                                key={id}
                            />
                        )
                    })
                }
                </div>
                <div className="flex flex-col gap-10">
                {
                    bottomNonNavigableItems.map((item: any, id: any) => {
                        return (
                            <Image
                                src={item.iconPath}
                                width={20}
                                height={20}
                                alt={item.alt}
                                onClick={item.onClick}
                                key={id}
                            />
                        )
                    })
                }
                </div>
            </div>
        </>
    )
}
