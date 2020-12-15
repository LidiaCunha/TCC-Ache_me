import React from "react";
import { GlobalStyles } from "./styles/GlobalStyles";
import Post from "./pages/feed/index";

import Routes from "./routes";

import Post2 from './components/CreatePost/index.js';

function App() {  
  return (
    <>
      <Routes />
      <GlobalStyles/>
    </>
  );
}

export default App;
