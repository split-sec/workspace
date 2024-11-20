import ComingSoon from "../components/coming-soon";
import ContentPage from "../components/content-page/content-page";

export default function MessagesPage() {
    return (
        <ContentPage 
            header="messaging" 
            subtext="chat with your friends about your storyboards" 
            content={<ComingSoon />} 
        />
    )
}