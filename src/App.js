import "./App.css";
import * as React from "react";
import Home from "./pages/Home";
import NotFound from "./components/NotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import { client } from "./Apollo-client/client";
import Experts from "./pages/Experts";
import ServiceProviders from "./pages/ServiceProviders";
import Designs from "./pages/Designs";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experts" element={<Experts />} />
          <Route path="/designs" element={<Designs />} />
          <Route path="/service-providers" element={<ServiceProviders />} />
          <Route path="/checkout" element={<Checkout />} />
          {/* <Route path="/characters/:id" element={<Character />} /> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <div className="App"></div>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
