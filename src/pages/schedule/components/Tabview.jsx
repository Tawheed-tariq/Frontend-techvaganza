import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import ScheduleItem from "./ScheduleItem";
import { day1Events, day2Events } from "../../../constants/events";


const Tabview = ({ tab1, tab2 }) => {
  return (
    <Tabs>
      <TabList className={"flex gap-5 my-3"}>
        <Tab
          className={
            "px-14 py-3 text-base font-medium text-[#a2834b] bg-white border border-[#a2834b] focus:outline-none focus:ring-4 focus:ring-[#a2834b] hover:bg-[#e3dbcc] hover:transition-[500ms] text-center border-2"
          }
        >
          {tab1}
        </Tab>
        <Tab
          className={
            "px-14 py-3 text-base font-medium text-[#000000] bg-[#e3dbcc] border border-[#e3dbcc] focus:outline-none focus:ring-4 focus:ring-[#a2834b] hover:border-[#a2834b] hover:text-[#a2834b] hover:transition-[500ms] text-center border-2"
          }
        >
          {tab2}
        </Tab>
      </TabList> 
      <div className="border border-black px-3 py-4 pb-12">
        <TabPanel>
          {day1Events.map((item, index) => (
            <ScheduleItem
              key={index}
              title={item.title}
              startTime={item.startTime}
              endTime={item.endTime}
              venue={item.venue}
              registerUrl={item.registerUrl}
              exploreUrl={item.exploreUrl}
            />
          ))}
        </TabPanel>
        <TabPanel>
          {day2Events.map((item, index) => (
            <ScheduleItem
              key={index}
              title={item.title}
              startTime={item.startTime}
              endTime={item.endTime}
              venue={item.venue}
              registerUrl={item.registerUrl}
              exploreUrl={item.exploreUrl}
            />
          ))}
        </TabPanel>
      </div>
    </Tabs>
  );
};

export default Tabview;
