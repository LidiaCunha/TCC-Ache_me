
import React from "react";
import { GlobalStyles } from "./styles/GlobalStyles";
import Post from "./components/CreatePost/index";

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
