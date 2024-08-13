import PageLayout from "../../../Components/PageLayout";
import { VisualEvents } from "../../../constants/events";
import EventsPageLayout from "../components/EventPageLayout";


export default function VisualArts() {
  return (
    <PageLayout title={"Visual Arts"} imgUrl={"/BattleOfBands.png"}>
      <EventsPageLayout events={VisualEvents} />      
    </PageLayout>
  );
}
