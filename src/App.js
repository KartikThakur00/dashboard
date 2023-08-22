import React, { useEffect, useState } from "react";
import "./App.css";
import View3 from "./components/View3";
import View4 from "./components/View4";
import View6 from "./components/View6";

function App() {
  const renderCounter = React.useRef(0);
  renderCounter.current = renderCounter.current + 1;
  const [results, setResults] = useState([]);
  // const [currentView, setCurrentView] = useState("View3");

  const fetchApis = async () => {
    const view3 = await fetch("/view3").then((res) => res.json());
    const view4 = await fetch("/view4").then((res) => res.json());
    const view6 = await fetch("/view6").then((res) => res.json());
    const data = await [view3, view4, view6];
    setResults(data);
  };
  useEffect(() => {
    fetchApis();
  }, []);

  // console.log(results)

  // function handleView3Click() {
  //   setCurrentView("View3");
  // }
  // function handleView4Click() {
  //   setCurrentView("View4");
  // }
  // function handleView6Click() {
  //   setCurrentView("View6");
  // }
  return (
    <div className="app">
      {/* <div className="nav-button">
        <button onClick={handleView3Click} className="change">
          View3
        </button>
        <button onClick={handleView4Click} className="change">
          View4
        </button>
        <button onClick={handleView6Click} className="change">
          View6
        </button>
      </div> */}
      {results.length > 0 ? (
        <div>
          {/* {currentView === "View3" && <View3 data={results[0]} />}
          {currentView === "View4" && <View4 data={results[1]} />}
          {currentView === "View6" && <View6 data={results[2]} />} */}
          <div className="dash">
            <div className="one">
              <View4 data={results[1]} />
            </div>
            <div className="two">
              <View3 data={results[0]} />
              <View6 data={results[2]} />
            </div>
          </div>
        </div>
      ) : (
        <div className="loading">
          <p>loading data</p>
        </div>
      )}
      {/* <div className="dash">
        <div className="one">
        <View4 data={results[1]} />
        </div>
        <div className="two">
        <View3 data={results[0]}/>
        <View6 data={results[2]}/>
        </div> */}
      {/* </div> */}
    </div>
  );
}

export default App;
