import "./App.css";
import * as React from "react";
import Home from "./pages/Home";
import NotFound from "./components/NotFound";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import { client } from "./Apollo-client/client";
import Experts from "./pages/Experts";
import ServiceProviders from "./pages/ServiceProviders";
import Designs from "./pages/Designs";
import Checkout from "./pages/Checkout";
import { useToken } from "./hooks/useAuth";

function PrivateRoute({ children }) {
  // const Navigate = useNavigation();
  let navigate = useNavigate();

  const auth = useToken();
  console.log("children", children);
  console.log("auth", typeof auth);
  console.log(auth !== null, "auth !== null");

  return auth !== null ? children : navigate("/");
}

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experts" element={<Experts />} />
          <Route path="/service-providers" element={<ServiceProviders />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route
            path="/designs"
            element={
              <PrivateRoute>
                <Designs />
              </PrivateRoute>
            }
          />

          <Route path="*" element={<NotFound />} />
        </Routes>
        {/* <div className="App"></div> */}
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
