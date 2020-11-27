
import React from "react";
import { GlobalStyles } from "./styles/GlobalStyles";
import modalPostagem from "./pages/user_info/modalPostagem";
import Post from "./pages/post/index";

import Routes from "./routes";

function App() {  
  return (
    <>
      <Routes />
      <GlobalStyles/>
    </>
  );
}

export default App;
