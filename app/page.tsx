import ContentPage from "./components/content-page/content-page";

export default function Home() {
  return (
    <>
      <ContentPage 
        header="collections" 
        subtext="personalized content storyboards" 
        content={<div>
          Editing Section
        </div>} 
      />
    </>
  );
}
