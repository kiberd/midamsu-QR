import React, { useState } from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

import SleepAndPeel from "./SleepAndPeel";
import GoldSica from "./GoldSica";
import Salmon from "./Salmon";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/sleepandpeel" element={<SleepAndPeel />} />
          <Route path="/goldcica" element={<GoldSica />} />
          <Route path="/salmon" element={<Salmon />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
