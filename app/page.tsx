"use client";

import { useCallback, useEffect, useState } from "react";
import ComboButtonFilterComponent from "./components/combo-button-filter";
import ContentPage from "./components/content-page/content-page";
import NewFolderComponent from "./components/new-folder";
import SortByComponent from "./components/sortby";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { CollectionItem, getCollectionData, optionsList } from "./utils/collection";
import CollectionCardComponent from "./components/collection-card";
import ActionItemsComponent from "./components/action-items";

export default function Home() {
  const router = useRouter();
  const pathname = usePathname();
  const queryParams = useSearchParams();

  const [collectionData, setCollectionData] = useState<CollectionItem[]>([]);

  const onSelect = useCallback(
    (queryValue: string, queryType = 'type') => {
      const params = new URLSearchParams(queryParams.toString())
      params.set(queryType, queryValue)
 
      router.push(pathname + '?' + params);
    },
    [queryParams]
  );

  const isSelected = useCallback(
    (targetOption: string) => {
      if (targetOption === 'All Files' && !queryParams.get('type')) {
        return targetOption;
      }

      return queryParams.get('type') === targetOption;
    },
    [queryParams]
  );

  useEffect(() => {
    let data = getCollectionData();

    const typeParam = queryParams.get('type');
    if (typeParam && typeParam !== 'All Files') {
      data = data.filter((item: CollectionItem) => item.type === typeParam);
    }

    const searchParam = queryParams.get('search');
    if (searchParam) {
      data = data.filter((item: CollectionItem) => item.title.toLowerCase().includes(searchParam.toLowerCase()));
    }

    setCollectionData(data);
  }, [queryParams]);
  
  return (
    <>
      <ContentPage 
        header="collections" 
        subtext="personalized content storyboards" 
        mainContent={<div className="my-8">
          <div className="flex justify-between">
            <div className="flex items-center gap-x-3">
              <NewFolderComponent />
              <ComboButtonFilterComponent optionsList={optionsList} onSelect={onSelect} isSelected={isSelected} />
            </div>
            <SortByComponent />
          </div>
          <div className="my-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-8">
            {
              collectionData.map((item: CollectionItem) => {
                return (
                  <CollectionCardComponent data={item} key={item.id} />
                );
              })
            }
            </div>
          </div>
        </div>} 
        filterContent={<ActionItemsComponent />}
      />
    </>
  );
}
