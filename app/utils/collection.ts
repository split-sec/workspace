import { CollectionItem, OptionItem } from "../types/shared";

const mockCollectionData: CollectionItem[] = [
    {
        id: 1,
        title: 'Collection 1',
        type: 'Photos',
        noOfItems: 5,
        thumbnail: 'https://images.unsplash.com/photo-1731432248686-af238c870acc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        altText: 'Collection 1 Thumbnail',
    },
    {
        id: 2,
        title: 'Collection 2',
        type: 'Videos',
        noOfItems: 3,
        thumbnail: 'https://cdn.pixabay.com/video/2024/11/07/240320_tiny.mp4',
        altText: 'Collection 2 Thumbnail',
    },
    {
        id: 3,
        title: 'Collection 3',
        type: 'Photos',
        noOfItems: 5,
        thumbnail: 'https://images.unsplash.com/photo-1731466450638-959a6f0d1514?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8',
        altText: 'Collection 3 Thumbnail',
    },
    {
        id: 4,
        title: 'Collection 4',
        type: 'Videos',
        noOfItems: 3,
        thumbnail: 'https://cdn.pixabay.com/video/2023/11/28/191159-889246512_tiny.mp4',
        altText: 'Collection 4 Thumbnail',
    },
    {
        id: 5,
        title: 'Collection 5',
        type: 'Photos',
        noOfItems: 5,
        thumbnail: 'https://images.unsplash.com/photo-1731690415686-e68f78e2b5bd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNXx8fGVufDB8fHx8fA%3D%3D',
        altText: 'Collection 5 Thumbnail',
    },
    {
        id: 6,
        title: 'Collection 6',
        type: 'Videos',
        noOfItems: 4,
        thumbnail: 'https://cdn.pixabay.com/video/2024/08/27/228447_tiny.mp4',
        altText: 'Collection 6 Thumbnail',
    },
    {
        id: 7,
        title: 'Collection 7',
        type: 'Videos',
        noOfItems: 3,
        thumbnail: 'https://cdn.pixabay.com/video/2024/09/19/232185_tiny.mp4',
        altText: 'Collection 7 Thumbnail',
    },
    {
        id: 8,
        title: 'Collection 8',
        type: 'Photos',
        noOfItems: 5,
        thumbnail: 'https://images.unsplash.com/photo-1731952161739-bc8bb6d17a76?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D',
        altText: 'Collection 8 Thumbnail',
    },
];

export const getCollectionData = () => {
    return [...mockCollectionData];
}

export const optionsList: OptionItem[] = [
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

