import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

const TabView = ({ data }) => {
  return (
    <>
      <Tabs>
        <TabList className="flex gap-5 my-3">
          <Tab
            className="px-14 py-3 text-base font-medium text-[#a2834b] bg-white border-[#a2834b] focus:outline-none hover:bg-[#e3dbcc] text-center border-2 cursor-pointer"
            selectedClassName="active-tab"
          >
            Rules and prizes
          </Tab>
          <Tab
            className="px-14 py-3 text-base font-medium text-[#a2834b] bg-white border-[#a2834b] focus:outline-none hover:bg-[#e3dbcc] text-center border-2 cursor-pointer"
            selectedClassName="active-tab"
          >
            Judging Criteria
          </Tab>
        </TabList>
        <div className="ShadowSmall mx-2 my-2 px-3 py-4 pb-12">
          <TabPanel>
            <h1 className="entry-header text-2xl mb-4 mt-4 mx-6">Rules</h1>
            <div className="space-y-5 mx-4 font-medium">
              {data.rules.map((rule) => (
                <p>{rule}</p>
              ))}
            </div>

            <hr className="p-2" />
            <h1 className="entry-header text-2xl mb-4 mt-4 mx-4">Prizes</h1>
            <div className="space-y-5 mx-4 font-medium">
              {data.prizes.map((prize) => (
                <p>{prize}</p>
              ))}
            </div>
          </TabPanel>

          <TabPanel>
            <h2 className="entry-header text-2xl mb-4 mt-4 mx-4">
              Judging Criteria
            </h2>
            <div className="space-y-5 mx-4 font-medium">
              {data.judgingCriteria.map((criteria) => (
                <p>{criteria}</p>
              ))}
            </div>
          </TabPanel>
        </div>
      </Tabs>
    </>
  );
};

export default TabView;
