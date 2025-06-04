import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Home from "./Home";
import Home2 from "./Home2";
import Home3 from "./Home3";
import Header from "./Header";
import DonatePage from "./donate";
import Wallpage from "./Wallpage";
import Message from "./Message";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <>
              <Home />
              <Home2 />
              <Home3 />
            </>
          }
        />
        <Route path="/donate" element={<DonatePage />} />
        <Route path="/feed" element={<Wallpage />} />
        <Route path="/send" element={<Message />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <Router>
      <Header />
      <AnimatedRoutes />
    </Router>
  );
}
