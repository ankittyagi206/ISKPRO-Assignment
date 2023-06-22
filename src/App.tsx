import ReportFlow from "./components/ReportFlow";
import data from "./ssr.json";
import React from "react";
const App = () => {
  return (
    <div>
      <ReportFlow data={data} />
    </div>
  );
};

export default App;
