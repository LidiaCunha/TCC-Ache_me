
import React from "react";
import { GlobalStyles } from "./styles/GlobalStyles";

import AreaInformativa from "./pages/Area_Informativa/index.js";
import Routes from "./routes";
import SobreEmpresa from "./pages/sobre";

function App() {
  return (
    <>
      <SobreEmpresa/>
      <GlobalStyles/>
    </>
  );
}

export default App;
