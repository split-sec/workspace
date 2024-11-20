import ComingSoon from "../components/coming-soon";
import ContentPage from "../components/content-page/content-page";

export default function MetricsPage() {
    return (
        <ContentPage 
            header="metrics" 
            subtext="view your storyboard visits, likes and shares" 
            content={<ComingSoon />} 
        />
    )
}