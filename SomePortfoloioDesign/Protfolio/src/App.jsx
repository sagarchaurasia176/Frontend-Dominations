import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Navabar/Header";
import Section1 from "./components/FirstSection/Section1";
import LoadParent from "./components/Loader/LoadParent";

// App Component
const App = () => {
  return (
    <>
    {/* Loading */}
    <LoadParent/>
    <div className=" h-screen w-full  bg-backgroundImage   bg-cover bg-center">
    <Header />
      {/* navbar */}
      <Routes>
        <Route path="/" element={<Section1/>}></Route>
      </Routes>
    </div>
    </>

  );
};

export default App;
