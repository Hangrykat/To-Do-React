import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
//import "react-tabs/style/react-tabs.css";
import './Tabs.css';
import Main from '../main/Main';

export default function TabTab() {
  return (
    <Tabs>
      <TabList className="lista">
        <Tab>Important</Tab>
        <Tab>Done</Tab>
        <Tab>Tasks</Tab>
      </TabList>

      <TabPanel>
       <Main />
      </TabPanel>
      <TabPanel>
      <Main />
      </TabPanel>
      <TabPanel>
      <Main />
      </TabPanel>
    </Tabs>
  );
}
