import PageLayout from "../../../Components/PageLayout";
import { MuzicalEvents } from "../../../constants/events";
import EventsPageLayout from "../components/EventPageLayout";

export default function MuzicalArts(){
    return(
        <PageLayout title={"Muzical Arts"} imgUrl={'/BattleOfBands.png'}>
          <EventsPageLayout events={MuzicalEvents} /> 
        </PageLayout>
    )
}