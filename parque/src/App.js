import React from "react";
import "./App.css";
import DataFetching from './DataFetching';
// import CatalogVodsContainer from "./vods/VodsContainer";
// import LazyStart from "./lazy/LazyStart";

function App() {
  return (
    <React.Fragment>
       <DataFetching /> 
      {/* <CatalogVodsContainer />*/}
      {/* <LazyStart /> */}
    </React.Fragment>
  );
}

export default App;
