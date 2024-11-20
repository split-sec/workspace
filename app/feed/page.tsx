import ComingSoon from "../components/coming-soon";
import ContentPage from "../components/content-page/content-page";

export default function FeedPage() {
    return (
        <ContentPage 
            header="feed" 
            subtext="storyboard feed based on personal preferences" 
            content={<ComingSoon />} 
        />
    )
}