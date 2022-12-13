import "./App.css";
import * as React from "react";
import Home from "./pages/Home";
import NotFound from "./components/NotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/characters/:id" element={<Character />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <div className="App"></div>
    </BrowserRouter>
  );
}

export default App;
