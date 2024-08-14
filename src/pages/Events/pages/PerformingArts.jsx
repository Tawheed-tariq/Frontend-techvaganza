import PageLayout from "../../../Components/PageLayout";
import { PerformingEvents } from "../../../constants/events";
import EventsPageLayout from "../components/EventPageLayout";

export default function PerformingArts() {
  return (
    <PageLayout title={"Performing Arts"} imgUrl={"/BattleOfBands.png"}>
      <EventsPageLayout events={PerformingEvents} /> 
    </PageLayout>
  );
}
