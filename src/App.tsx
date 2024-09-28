import * as React from "react";

import "./App.css";
import EditSide from "./components/edit-side/edit-side";
import ResumeContainer from "./components/resume-container/resume-container";
function App() {
  return (
    <div className="App">
      <main className="App-main">
        <EditSide />
        <ResumeContainer />
      </main>
    </div>
  );
}

export default App;
