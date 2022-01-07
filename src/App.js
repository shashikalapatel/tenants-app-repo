import React from 'react';
import Passcode from './components/Passcode';
import configData from "./configs/app.config.json";

function App() {
  var tenantData;
  if(process.env.REACT_APP_API_URL == "http://localhost:3000/ru/") {
    tenantData = configData.ru;
  } else if(process.env.REACT_APP_API_URL == "http://localhost:3000/ubc/") {
    tenantData = configData.ubc;
  }
  return (
    <Passcode tenantObj={tenantData}/>
  );
}

export default App;