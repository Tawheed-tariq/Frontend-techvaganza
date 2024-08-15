import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import EventDetailsLayout from "../../components/EventDatailsLayout";

const photographyData = {
  title: "Live Photography",
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
      <TabList className={"flex md:gap-2 my-3"}>
        <Tab
          className={
            "px-8 md:px-14 py-3 text-base font-medium text-[#a2834b] bg-white border-[#a2834b] focus:outline-none hover:bg-[#e3dbcc] text-center border-2 cursor-pointer"
          }
          selectedClassName="active-tab"
        >
          Rules and prizes
        </Tab>
        <Tab
          className={
            "px-8 md:px-14 py-3 text-base font-medium text-[#a2834b] bg-white border-[#a2834b] focus:outline-none hover:bg-[#e3dbcc] text-center border-2 cursor-pointer"
          }
          selectedClassName="active-tab"
        >
          Judging Criteria
        </Tab>
      </TabList>

      <div className="ShadowSmall mx-2 my-2 px-3 py-4 pb-12">
        <TabPanel>Rules and prizes</TabPanel>
        <TabPanel>Judging Criteria</TabPanel>
      </div>
    </Tabs>
  ),
};

export default function Photography() {
  return (
    <>
      <EventDetailsLayout
        title={"Live PhotoGraphy"}
        imgUrl={"/ambassador.png"}
        data={photographyData}
      />
    </>
  );
}
