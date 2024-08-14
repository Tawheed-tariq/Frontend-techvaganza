import PageLayout from "../../Components/PageLayout";
import Tabview from "./components/Tabview";
export default function Schedule() {
  return (
    <PageLayout title={"Event Timings"} imgUrl={"/ambassador.png"}>
        <div className="px-10 py-10 font-playfair bg-white">
          <p className="font-extrabold text-5xl leading-normal">Schedule</p>
          <Tabview tab1={"Day 1"} tab2={"Day 2"} />
        </div>
    </PageLayout>
  );
}

