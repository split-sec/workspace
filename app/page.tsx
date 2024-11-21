"use client";

import { useState } from "react";
import ComboButtonFilterComponent from "./components/combo-button-filter";
import ContentPage from "./components/content-page/content-page";
import NewFolderComponent from "./components/new-folder";
import SortByComponent from "./components/sortby";

export default function Home() {
  const [selectedOption, setSelectedOption] = useState<string>('All Files');

  const optionsList = [
    {
      title: 'All Files',
    },
    {
      title: 'Photos',
    },
    {
      title: 'Videos',
    },
    {
      title: 'Documents',
    },
  ];

  const onSelect = (option: string) => {
    setSelectedOption(option);
  };

  const isSelected = (targetOption: string) => {
    return targetOption === selectedOption;
  };
  
  return (
    <>
      <ContentPage 
        header="collections" 
        subtext="personalized content storyboards" 
        content={<div className="my-8">
          <div className="flex justify-between">
            <div className="flex items-center gap-x-3">
              <NewFolderComponent />
              <ComboButtonFilterComponent optionsList={optionsList} onSelect={onSelect} isSelected={isSelected} />
            </div>
            <SortByComponent />
          </div>
          
        </div>} 
        showActionItems={true}
      />
    </>
  );
}
