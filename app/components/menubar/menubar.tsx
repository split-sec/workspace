"use client"

import { bottomNavbarButtonList, navbarButtonList, navbarIconsList } from "@/app/utils/navbar";
import { usePathname } from "next/navigation";
import DesktopNavigableItem from "../desktop-navigable-item";
import DesktopNonNavigableItem from "../desktop-non-navigable-item";
import MobileNavigableItem from "../mobile-navigable-item";

export default function Menubar() {
    const navigableItems = [...navbarIconsList];
    const nonNavigableItems = [...navbarButtonList];
    const bottomNonNavigableItems = [...bottomNavbarButtonList];

    const pathname = usePathname();
    const isActive = (targetPath: string) => targetPath === pathname;

    return (
        <>
            <div className="flex items-center justify-between fixed z-[9999] bottom-0 h-[60px] left-0 w-full sm:invisible py-4 px-8 bg-bright-bg">
            {
                navigableItems.map((item, id: number) => {
                    return (
                        <MobileNavigableItem 
                            iconPath={isActive(item.href) ? item.iconPathActive : item.iconPath} 
                            altText={item.alt} 
                            href={item.href} 
                            key={id}
                        />
                    )
                })
            }
            </div>

            <div className="invisible sm:visible fixed z-[9999] flex flex-col items-center justify-between left-0 top-0 h-full py-16 px-5">
                <div className="flex flex-col gap-10">
                {
                    navigableItems.map((item, id: number) => {
                        return (
                            <DesktopNavigableItem 
                                iconPath={isActive(item.href) ? item.iconPathActive : item.iconPath} 
                                altText={item.alt} 
                                href={item.href} 
                                key={id}
                            />
                        )
                    })
                }
                {
                    nonNavigableItems.map((item, id: number) => {
                        return (
                            <DesktopNonNavigableItem
                                iconPath={item.iconPath}
                                altText={item.alt}
                                onClick={() => {}}
                                key={id}
                            />
                        )
                    })
                }
                </div>
                <div className="flex flex-col gap-10">
                {
                    bottomNonNavigableItems.map((item, id: number) => {
                        return (
                            <DesktopNonNavigableItem
                                iconPath={item.iconPath}
                                altText={item.alt}
                                onClick={() => {}}
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
