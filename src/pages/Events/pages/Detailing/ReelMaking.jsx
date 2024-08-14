import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import EventDetailsLayout from "../../components/EventDatailsLayout";

const reelMakingData = {
  title: "Reel Making",
  desc: "Darpan is a celebration of the art of capturing moments, emotions, and stories through the lens. Immerse yourself in the world of photography and witness stunning visual narratives brought to life by the industry's finest. Showcase your skills in a day long Photography challenge at Darpan.",
  entryFee: {
    "NIT Srinagar Students": {
      "Single-Day Pass": "₹ 19 (5 Photos, 1 Day)",
      "Weekend Pass": "₹ 29 (5+5 Photos, 2 Days)",
      "Multiple Entries Pass": "₹ 49 (10+10 Photos)",
    },
    "Other Institute Students": {
      "Single-Day Pass": "₹ 29 (5 Photos)",
      "Weekend Pass": "₹ 39 (5+5 Photos, 2 Days)",
      "Multiple Entries Pass": "₹ 79 (10+10 Photos)",
    },
  },
  contact: [
    {
      name: "Dhairyashil Hasbe",
      phone: "+91 9325363505",
    },
  ],
  children: (
    <Tabs>
      <TabList className={"flex gap-5 my-3"}>
        <Tab
          className={
            "border border-black cursor-pointer bg-secondary px-5 py-2 text-lg focus:outline-none font-medium"
          }
        >
          Rules and prizes
        </Tab>
        <Tab
          className={
            "border border-black cursor-pointer bg-secondary px-5 py-2 text-lg focus:outline-none font-medium"
          }
        >
          Judging Criteria
        </Tab>
      </TabList>

      <div className={"border border-black px-3 py-4"}>
        <TabPanel>Rules and prizes</TabPanel>
        <TabPanel>Judging Criteria</TabPanel>
      </div>
    </Tabs>
  ),
};

export default function ReelMaking() {
  return (
    <>
      <EventDetailsLayout
        title={"Reel Making"}
        imgUrl={"/ambassador.png"}
        data={reelMakingData}
      />
    </>
  );
}
