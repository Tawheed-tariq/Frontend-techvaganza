import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import ScheduleItem from "./ScheduleItem";
import { day1Events, day2Events } from "../../../constants/events";


const Tabview = ({ tab1, tab2 }) => {
  return (
    <Tabs>
      <TabList className={"flex gap-5 my-3"}>
        <Tab
          className={
            "border border-black cursor-pointer bg-secondary px-5 py-2 text-lg focus:outline-none font-medium"
          }
        >
          {tab1}
        </Tab>
        <Tab
          className={
            "border border-black cursor-pointer bg-secondary px-5 py-2 text-lg focus:outline-none font-medium"
          }
        >
          {tab2}
        </Tab>
      </TabList>

      <div className={"border border-black px-3 py-4"}>
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
