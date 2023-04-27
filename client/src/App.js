import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Whiteboard from "./components/whiteboard/Whiteboard2.js";
import { ChakraProvider } from "@chakra-ui/react";


//comment to add push
function App() {

  const [tabIndex, setTabIndex] = useState(0);

  const pathname = window.location.pathname;
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/whiteboard" element={<Whiteboard />} />
      </Routes>
    </div>
  );
}

export default App;
