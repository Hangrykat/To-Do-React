import React from "react";
import "./App.css";

import Header from "../components/header/Header";
import Main from "../components/main/Main";
import TabTab from '../components/Tabs/Tabs';

function App() {
  return (
    <div className="App">
      <div className="body-container">
        <Header />
        <TabTab />
      
      </div>
    </div>
  );
}

export default App;
