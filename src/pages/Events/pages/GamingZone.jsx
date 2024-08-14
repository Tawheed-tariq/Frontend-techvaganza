import PageLayout from "../../../Components/PageLayout";
import { gamingEvents } from "../../../constants/events";
import EventsPageLayout from "../components/EventPageLayout";

export default function GamingZone(){
    return(
        <PageLayout title={"Gaming Arts"} imgUrl={'/BattleOfBands.png'}>
          <EventsPageLayout events={gamingEvents} /> 
        </PageLayout>
    )
}