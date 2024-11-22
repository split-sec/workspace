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
import EditCollectionsComponent from "./components/edit-collections";

export default function Home() {
  const router = useRouter();
  const pathname = usePathname();
  const queryParams = useSearchParams();

  const [collectionData, setCollectionData] = useState<CollectionItem[]>([]);
  const [uneditedCollectionData, setUneditedCollectionData] = useState<CollectionItem[]>([]);
  const [filteredCollectionData, setFilteredCollectionData] = useState<CollectionItem[]>([]);
  const [isEditMode, setIsEditMode] = useState<boolean>(false);

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

  const handleTitleChange = (targetId: number, changedTitle: string) => {
    const modifiedData = collectionData.map((item: CollectionItem) => {
      if (item.id === targetId) {
        item.title = changedTitle;
      }

      return item;
    });

    setCollectionData(() => [...JSON.parse(JSON.stringify(modifiedData))]);
  };

  const handleSave = () => {
    setUneditedCollectionData(() => [...JSON.parse(JSON.stringify(collectionData))]);
    setIsEditMode(false);
  };

  const handleCancel = () => {
    setCollectionData(() => [...JSON.parse(JSON.stringify(uneditedCollectionData))]);
    setUneditedCollectionData(() => [...JSON.parse(JSON.stringify(uneditedCollectionData))]);
    setIsEditMode(false);
  }

  useEffect(() => {
    let data: CollectionItem[] = [...JSON.parse(JSON.stringify(collectionData))];
    const typeParam = queryParams.get('type');
    if (typeParam && typeParam !== 'All Files') {
      data = data.filter((item: CollectionItem) => item.type === typeParam);
    }

    const searchParam = queryParams.get('search');
    if (searchParam) {
      data = data.filter((item: CollectionItem) => item.title.toLowerCase().includes(searchParam.toLowerCase()));
    }

    setFilteredCollectionData(() => [...JSON.parse(JSON.stringify(data))]);
  }, [queryParams, uneditedCollectionData]);

  useEffect(() => {
    let data = getCollectionData();
    setCollectionData(() => [...data]);
    setUneditedCollectionData(() => [...data]);
  }, []);
  
  return (
    <>
      <ContentPage 
        header="collections" 
        subtext="personalized content storyboards" 
        filterContent={isEditMode ? <EditCollectionsComponent onSave={handleSave} onClose={handleCancel}  /> : <ActionItemsComponent onClick={() => setIsEditMode(true)} />}
        mainContent={<div className="my-8">
          <div className="flex justify-between">
            <div className="flex items-center gap-x-3">
              <NewFolderComponent />
              <ComboButtonFilterComponent optionsList={optionsList} onSelect={onSelect} isSelected={isSelected} />
            </div>
            <SortByComponent queryName="Created date" isAscending={false} />
          </div>
          <div className="my-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-8 items-center">
            {
              isEditMode ? (
                collectionData.map((item: CollectionItem, id: number) => {
                  return (
                    <CollectionCardComponent data={item} isEditMode={true} key={`editMode_${id}`} onChange={handleTitleChange} />
                  );
                })
              ) : (
                filteredCollectionData.map((item: CollectionItem, id: number) => {
                  return (
                    <CollectionCardComponent data={item} isEditMode={false} key={`notEditMode_${id}`} />
                  );
                })
              )
            }
            {/* {
                filteredCollectionData.map((item: CollectionItem, id: number) => {
                  return (
                    <CollectionCardComponent data={item} isEditMode={isEditMode} key={`${id}`} onChange={handleTitleChange} />
                  );
                })
            } */}
            </div>
          </div>
        </div>} 
      />
    </>
  );
}
