import React from "react";
import { GlobalStyles } from "./styles/GlobalStyles";
import Post from "./pages/feed/index";

import Routes from "./routes";

function App() {  
  return (
    <>
      <Post />
      <GlobalStyles/>
    </>
  );
}

export default App;
