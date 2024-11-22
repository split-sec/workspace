import ComingSoon from "../components/coming-soon";
import ContentPage from "../components/content-page/content-page";

export default function CollagePage() {
    return (
        <ContentPage 
            header="collage" 
            subtext="collaborate with friends on your shared collections" 
            mainContent={<ComingSoon />} 
        />
    )
}