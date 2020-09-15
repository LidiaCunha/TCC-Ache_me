import React, { useState } from "react";
import Login from "./pages/Login/index.js";
import Cadastro from "./pages/Cadastro/index.js";
import { GlobalStyle } from "./styles/GlobalStyles"

function App() {
  return (
    <>
      <Cadastro/>

      
      <GlobalStyle />
    </>
  );
}

export default App;
